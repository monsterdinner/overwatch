import Vue from 'vue';
import Router from 'vue-router';
import HelloContainer from "./components/HelloWorld.vue";
import Index from "./components/Index.vue";

//1.引入自定义组件



Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:Index},

  ],linkActiveClass:"mui-active"
})
