import Vue from 'vue';
import Router from 'vue-router';
import HelloContainer from "./components/HelloWorld.vue";
import Index from "./components/Index.vue";
import Summarize from './components/summarize.vue';
import Esports from './components/esports.vue'
//1.引入自定义组件



Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
    redirect:"/home",
    name: 'Home',
    meta:{index:0},
  },
    {
      path:'/home',
    component:Index,
    name: 'Home',
      meta:{index:0},
  },
    {
      path:'/summarize',
    component:Summarize,
    name: 'Summarize',
      meta:{index:1},
  },
  {
    path:'/esports',
  component:Esports,
  name: 'Esports',
    meta:{index:2},
}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass:"mui-active"
})
