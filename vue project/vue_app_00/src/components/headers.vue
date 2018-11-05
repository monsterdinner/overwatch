<template>
   <div id="app-header">
         <div class="navbar">
      <div class="navbar-container">
          <nav class="navbar-desktop">
              <div class="navbar-desktopOverlay" v-show="fal3" @click="black"></div>
              <a href="#" class="navbar-logo"></a>
              <div class="navbar-items">
                  <a href="#"  class="navbar-item" @click="shownav">
                      <div class="navbar-label nav-shadow" >游戏</div>
                      <div class="navbar-icon"></div>
                  </a>
                  <a href="#" class="navbar-item" ><div class="navbar-label">商城</div></a>
                  <a href="#" class="navbar-item"><div class="navbar-label">新闻</div></a>
                  <a href="#" class="navbar-item"  @click="shownav1"><div class="navbar-label">电子竞技</div>
                      <div class="navbar-icon"></div></a>
                  <a href="#" class="navbar-item"><div class="navbar-label">暴雪嘉年华</div></a>
              </div>
              <div class="navbar-right">
                  <a href="#" class="navbar-item">
                      <div class="navbar-label">支持</div>
                  </a>
                   <a href="#" class="navbar-item"  @click="shownav2">
                  <div class="navbar-label">你的通行证</div>
                  <div class="navbar-icon"></div>
              </a>
              </div>
          </nav>
      </div>
      <!--游戏-->
      <div class="navbar-modals Navbar" v-show="fal">
          <div class="nav-modal">
              <div class="navbar-tick" style="left: 169.812px;">
                  <div class="Navbar-tickInner" style="opacity: 0.717649;"></div>
              </div>
              <div class="navbar-modalContent">
                  <div class="navbar-gamePublishers">
                      <div class="navbar-gamePublisher">
                          <nav class="navbar-posters Navbar-imagePanel">
                              <a href="#" class="Navbar-poster">
                                  <img src="http://127.0.0.1:3001/img/card-overwatch.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-world-of-warcraft.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-hearthstone.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-heroes-of-the-storm.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-starcraft.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-starcraft-remastered.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="img/card-diablo.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!--电子竞技-->
      <div class="navbar-modals Navbar"  v-show="fal1">
          <div class="nav-modal" >
              <div class="navbar-tick" style="left: 395.812px;"><div class="Navbar-tickInner" style="opacity: 0.717649;"></div></div>
              <div class="navbar-modalContent">
                  <div class="navbar-esportsLogos" >
                      <a href="#" class="Navbar-esport ow-site animation-delay-1" @mouseover="overopen" @mouseout="overclose">
                          <img src="img/esports-ow.png" alt=""/>
                          <div class="navbar-esportLabel" >守望先锋电竞</div>
                      </a>
                      <div class="navbar-esport-sub" :class="{open:isopen}" @mouseover="overopen" @mouseout="overclose">
                          <a href="#" class="navbar-esport-link">
                              <img src="img/esports-overwatch.png" alt=""/>
                          </a>
                          <a href="#" class="navbar-esport-link">
                              <img src="img/esports-overwatch-world-cup.png" alt=""/>
                          </a>
                          <a href="#" class="navbar-esport-link">
                              <img src="img/esports-contenders.png" alt=""/>
                          </a>
                      </div>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="img/esports-gold.png" alt=""/>
                          <div class="navbar-esportLabel">炉石传说黄金系列赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="img/esports-heroes.png" alt=""/>
                          <div class="navbar-esportLabel">HGC黄金风暴联赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="img/esports-sc2-wcs.png" alt=""/>
                          <div class="navbar-esportLabel">星际争霸II黄金职业联赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="img/wariii .png" alt=""/>
                          <div class="navbar-esportLabel">魔兽争霸III黄金联赛</div>
                      </a>
                  </div>
              </div>
              <nav class="navbar-modalSection">
                  <a href="#" class="navbar-gameMenuItem">
                      <div class="Navbar-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false"><use xlink:href="#Navbar-icon-grid9"><g id="Navbar-icon-grid9"><rect x="26" y="26" width="12" height="12"></rect><rect x="42" y="10" width="12" height="12"></rect><rect x="26" y="42" width="12" height="12"></rect><rect x="10" y="26" width="12" height="12"></rect><rect x="26" y="10" width="12" height="12"></rect><rect x="10" y="42" width="12" height="12"></rect><rect x="42" y="42" width="12" height="12"></rect><rect x="42" y="26" width="12" height="12"></rect><rect x="10" y="10" width="12" height="12"></rect></g></use></svg>
                      </div>
                      <div class="navbar-gameMenuItemLabel">更多赛事</div>
                  </a>
              </nav>
          </div>
      </div>
      <!--登录-->
      <div class="navbar-constrained" v-show="fal2">
          <div class="navbar-modal Navbar-accountDropdown">
              <div class="navbar-tick" style="left: 292px;">
                  <div class="Navbar-tickInner" style="opacity: 0.717649;"></div>
              </div>
              <div class="Navbar-modalContent">
                  <div class="Navbar-accountDropdownLoggedOut">
                     <div class="Navbar-modalSection1"><a href="#" class="Navbar-accountDropdownButtonLink"><button class="Navbar-button is-full">登录</button></a></div>

                      <a href="#" class="Navbar-accountDropdownLink Navbar-accountDropdownSettings">
                          <div class="Navbar-accountDropdownLinkIcon zhanghao"></div>
                          <div class="Navbar-accountDropdownLinkLabel">账号</div>
                      </a>
                      <a href="#" class="Navbar-accountDropdownLink Navbar-accountDropdownSettings">
                          <div class="Navbar-accountDropdownLinkIcon zhuce"></div>
                          <div class="Navbar-accountDropdownLinkLabel">注册</div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
<div class="navbar1" id="navbar1" :style="Snavbar">
        <nav class="navbar1-main" :style="Snavbarmain">
            <div class="nav-left">
                <router-link to="home" class="nav-logo"></router-link>
            </div>
            <ul class="nav-menu">
                <app-header :title="game" :navfor="gaishu"></app-header>
                <li>
                    <a href="javascript:void(0);" class="nav-btn">
                        英雄
                    </a>
                </li>  
                 <app-header :title="huodong" :navfor="active"></app-header> 
                <li>
                    <a href="javascript:void(0);" class="nav-btn">
                        视频图片
                    </a>
                </li>
                <app-header :title="news" :navfor="xingwen"></app-header> 
                <li>
                    <a href="javascript:void(0);" class="nav-btn">
                        下载
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" class="nav-btn">
                        生涯数据
                    </a>
                </li>
                <li>
                   <router-link to="esports" class="nav-btn"> 电子竞技</router-link>
                </li>
                 <app-header :title="shequ" :navfor="shequ1"></app-header> 
            </ul>
            <div class="nav-right">
                <a href="javascript:void(0);" class="nav-btn m-orange">购买</a>
            </div>
            <div class="nav-border"></div>
        </nav>
</div>
   </div>
</template>
<script>
import header from './header'
  export default{
        data(){
            return{
                 transitionName:'',
                isopen:false,
                 game:"游戏",
                 fal:false,
                  fal1:false,
                 fal2:false,
                  fal3:false,
                 Snavbar:{},
                 Snavbarmain:{},
                 gaishu:[
                     {
                         word:"概述",
                         site:"summarize"
                     },
                      {
                         word:"赞赏系统",
                         site:"summarize"
                     }
                 ],
                 huodong:"活动",
                 active:[
                      {
                         word:"夏季运动会",
                         site:"summarize"
                     },
                      {
                         word:"行动档案",
                         site:"summarize"
                     },
                      {
                         word:"欢度新春",
                         site:"summarize"
                     },
                      {
                         word:"雪国仙境",
                         site:"summarize"
                     },
                      {
                         word:"万圣夜惊魂",
                         site:"summarize"
                     },
                      {
                         word:"周年庆典",
                         site:"summarize"
                     },
                      {
                         word:"国王大道",
                         site:"summarize"
                     }
                 ],
                 news:"新闻",
                 xingwen:[
                      {
                         word:"新闻",
                         site:"summarize"
                     },
                      {
                         word:"补丁",
                         site:"summarize"
                     }
                 ],
                shequ:"社区",
                shequ1:[
                    {
                         word:"我身边的英雄",
                         site:"summarize"
                     },
                      {
                         word:"论坛",
                         site:"summarize"
                     }
                ]
            };
        },
        methods:{
         handleScroll () {
           var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
           //console.log(scrollTop)
           var offsetTop = document.querySelector('#navbar1').offsetTop
           if(scrollTop>44){
                this.Snavbar={top:"0"}
                this.Snavbarmain={marginTop:"0px", marginLeft: "0px", marginRight: "0px"}
           }else{
           this.Snavbar={top:"44px"}
                           this.Snavbarmain={marginTop:"20px", marginLeft: "20px", marginRight: "20px"}
           }
         },
              shownav(){
             if(this.fal==false){
             this.fal=true;
             this.fal1=false;
             this.fal2=false;
             this.fal3=true;
             }else if(this.fal==true){
             this.fal=false;
             this.fal3=false;
             }
             },
         shownav1(){
             if(this.fal1==false){
             this.fal1=true;
             this.fal=false;
             this.fal2=false;
             this.fal3=true;
             }else if(this.fal1==true){
             this.fal1=false;
             this.fal3=false;
             }
             },
             shownav2(){
               if(this.fal2==false){
               this.fal2=true;
               this.fal=false;
               this.fal1=false;
               this.fal3=true;
               }else if(this.fal2==true){
              this.fal2=false;
               this.fal3=false;
              }
               },
               black(){
                 if(this.fal3==true){
                  this.fal3=false;
                  this.fal1=false;
                  this.fal2=false;
                  this.fal=false;
               }
               },
                 overopen(){
             this.isopen=true;
        },
        overclose(){
           this.isopen=false;
        }
        },
        created(){

        },
     watch: {//使用watch 监听$router的变化
         $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
           this.transitionName = 'slide-right';
        }
         }
        },
     mounted () {
            window.addEventListener('scroll', this.handleScroll)
          },
        components:{
               "app-header":header
        },
        destroyed () {
          window.removeEventListener('scroll', this.handleScroll)
           
        } 
}
</script>