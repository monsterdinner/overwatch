//1.加载模块 express
const express=require('express');
const routerImageList=require('./router/imageList')
const routerNewsList=require('./router/newsList')
const routerGoodList=require('./router/goodlist')
const routercart=require('./router/cart')
const bodyParser=require('body-parser')

//2.创建express
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
//2.1 加载处理跨域模块
const cors=require("cors");
//2.2 允许哪个地址跨域访问
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
}))
//3.绑定监听端口 3000
app.listen(3000);
//4.指定静态目录 public

app.use(express.static(__dirname+'/public'));

app.use('/imagelist',routerImageList);
app.use('/newslist',routerNewsList);
app.use('/goodlist',routerGoodList);
app.use('/cart',routercart);