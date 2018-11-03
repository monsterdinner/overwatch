import Vue from 'vue';
import Router from 'vue-router';
import HelloContainer from "./components/HelloWorld.vue";
import Index from "./components/Index.vue";
import Summarize from './components/summarize.vue';
import Esports from './components/esports.vue'
import Winter from './components/winter.vue'
//1.引入自定义组件



Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
    redirect:"/home",
  },
    {
      path:'/home',
    component:Index,
  },
    {
      path:'/summarize',
    component:Summarize,
  },
  {
    path:'/esports',
  component:Esports,
},
{
  path:'/winter',
component:Winter,
}

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass:"mui-active"
})
