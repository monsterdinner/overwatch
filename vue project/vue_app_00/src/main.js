import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
import "../public/css/header.css";
import'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)

//将VueResource引入当前项目中
import VueResource from 'vue-resource';
//加载VueResource
Vue.use(VueResource);

//定于全局日期格式过滤器
//当三方模块moment过滤器日期

//自定义
//过滤器名称 dateFormat  用户日期  datestr
Vue.filter("dateFormat",function(datestr,pattren="YYYY-MM-DD"){
  return new Date(datestr).toLocaleString();
})

Vue.config.productionTip = false
//5: 设置请求的根路径 
Vue.http.options.root = "http://127.0.0.1:3000";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true;
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
