const express=require('express');
const pool=require('../pool');

var router=express.Router();

//功能一：新闻分页显示GET/list
router.get('/list',(req,res)=>{
    //1.参数
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    //2.设置参数默认值
    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    //3.验证用户输入
    var reg=/^[0-9]{1,}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式不正确"})
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:"页大小格式不正确"})
        return;
    }
    //4.创建二条SQL发送
    //4.1:创建变量保存（sql语句完成）进度
    var obj={pno:pno,pageSize:pageSize};
    (async function() {
        await new Promise(function(open){
            var sql=`SELECT count(id) AS c FROM xz_news`;
            pool.query(sql,(err,result)=>{
                if(err) throw err;
                //console.log(result[0].c)
                var pageCount=Math.ceil(result[0].c/pageSize);
                obj.pageCount=pageCount;
                open();
            })
        })
        await new Promise(function(open){
            var sql=` SELECT id,title,ctime,click`;
                sql+=` FROM xz_news`;
                sql+=` LIMIT ?,?`;
            var offset=parseInt((pno-1)*pageSize);
            pageSize=parseInt(pageSize);
            pool.query(sql,[offset,pageSize],(err,result)=>{
                if(err) throw err;
                //console.log(result)
                obj.data=result;
                open();
            })
        })
        res.send({code:1,msg:obj});
    })();
   
    //res.send({code:1,msg:"ok"+pno+":"+pageSize})
    
});

router.get("/find",(req,res)=>{
    var id=req.query.id;
    var sql="SELECT `id`, `title`, `content`, `click`, `img_url`, `price`, `ctime` FROM `xz_news` WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result})
    })
})
router.get("/commentlist",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var nid=req.query.nid;
    if(!pno){pno=1}
    if(!pageSize){pageSize=5}
    var obj={pno:pno,pageSize:pageSize};
    var progress=0;
    var sql="SELECT count(id) as c FROM xz_comment WHERE nid= ?";
    pool.query(sql,[nid],(err,result)=>{
        if(err)throw err;
        console.log(result);
        obj.pageCount=Math.ceil(result[0].c/pageSize);
        progress+=50;
        if(progress==100)
        res.send(obj);
        
    })
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    var sql="SELECT `id`, `nid`, `ctime`, `content`, `username`, `isdel` FROM `xz_comment` WHERE nid= ? ORDER BY id DESC LIMIT ?,?";
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err)throw err;
        obj.data=result;
        progress+=50;
        if(progress==100)
        res.send(obj);
    }) 
})

router.post("/saveComment",(req,res)=>{
    var nid=req.body.nid;
    var username=req.body.username;
    var content=req.body.content;
    if(content.length<2){
        res.send({code:-1,msg:"亲，评论内容太少了"})
        return;
    }
    var sql="INSERT INTO `xz_comment`(`id`, `nid`, `ctime`, `content`, `username`, `isdel`) VALUES (null,?,now(),?,?,0)";
    pool.query(sql,[nid,content,username],(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send({code:1,msg:"添加成功"});
    })
})
module.exports=router;
