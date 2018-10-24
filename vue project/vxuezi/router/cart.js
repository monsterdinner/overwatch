//1.引入模块 pool express
const express=require('express');
const pool=require('../pool');
//2.创建路由对象
var router=express.Router();
//功能一:用户希望获取图片轮播列表
//3.处理请求 /list 返回所有图片轮播数据
//GET POST DELETE PUT HEAD OPTION TRACE CONNECT
//-用户提交参数 无参数
//-sql 
//-json text;xml;json{占空间少；易于处理}
router.get('/list',(req,res)=>{
    var obj={code:1,msg:[
		{id:1,name:"小辣椒",price:2100,count:1},	
        {id:2,name:"华为",price:2100,count:2},	
        {id:3,name:"苹果",price:2100,count:1},	
	]}
	res.send(obj);
});
//4.导出当前路由模块
module.exports=router;