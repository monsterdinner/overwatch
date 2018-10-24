<template>
<div id="app">
<div class="navbar1" id="navbar1" :style="Snavbar">
        <nav class="navbar1-main" :style="Snavbarmain">
            <div class="nav-left">
                <a href="#" class="nav-logo"></a>
            </div>
            <ul class="nav-menu">
                <li>
                    <a href="#" class="nav-btn" :class="{ 'mm-has-children':hasError ,'m-has-children': isActive }" @click="showToggle">
                        游戏
                    </a>
                    <ul class="nav-sub-menu m-sub-menu" v-show="isSubShow">
                        <li>
                            <a href="#" class="menu-btn m-highlight ">概述</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">赞赏系统</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="nav-btn">
                        英雄
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-btn " :class="{ 'mm-has-children':hasError1 , 'm-has-children': isActive1 }" @click="showToggle1">
                        活动
                    </a>
                    <ul class="nav-sub-menu m-sub-menu" v-show="isSubShow1">
                        <li>
                            <a href="#" class="menu-btn m-highlight ">夏季运动会</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">行动档案</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">欢度新春</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">雪国仙境</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">万圣夜惊魂</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">周年庆典</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">国王行动</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="nav-btn">
                        视频图片
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-btn" :class="{ 'mm-has-children':hasError2 , 'm-has-children': isActive2 }" @click="showToggle2">
                        新闻
                    </a>
                    <ul class="nav-sub-menu m-sub-menu" v-show="isSubShow2">
                        <li>
                            <a href="#" class="menu-btn m-highlight ">新闻</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">补丁</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="nav-btn">
                        下载
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-btn">
                        生涯数据
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-btn">
                        电子竞技
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-btn " :class="{ 'mm-has-children':hasError3 , 'm-has-children': isActive3 }" @click="showToggle3">
                        社区
                    </a>
                    <ul class="nav-sub-menu m-sub-menu" v-show="isSubShow3">
                        <li>
                            <a href="#" class="menu-btn m-highlight ">我们身边的英雄</a>
                        </li>
                        <li>
                            <a href="#" class="menu-btn m-highlight ">论坛</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="nav-right">
                <a href="#" class="nav-btn m-orange">购买</a>
            </div>
            <div class="nav-border"></div>
        </nav>
    </div>
    <router-view></router-view>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
</template>
<script>
 export default{
        data(){

            return{
                isActive:true,
                  hasError: false,
                   isActive1:true,
                 hasError1: false,
                 isActive2:true,
                  hasError2: false,
                  isActive3:true,
                  hasError3: false,
                 Snavbar:{},
                 Snavbarmain:{},
                 isSubShow:false,
                 isSubShow1:false,
                 isSubShow2:false,
                 isSubShow3:false


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
          showToggle(){
                     if(this.isSubShow==false){

                     this.isSubShow=true;
                      this.isActive=false;
                      this.hasError=true
                     }
                     else if(this.isSubShow==true){

                     this.isSubShow=false;
                    this.isActive=true;
                    this.hasError=false
                     }
             },
           showToggle1(){
                                  if(this.isSubShow1==false){

                                  this.isSubShow1=true;
                                  this.isActive1=false;
                                  this.hasError1=true
                                  }
                                  else if(this.isSubShow1==true){

                                  this.isSubShow1=false;
                                  this.isActive1=true;
                                  this.hasError1=false}
                          },
           showToggle2(){
                                            if(this.isSubShow2==false){

                                            this.isSubShow2=true;
                                             this.isActive2=false;
                                                                              this.hasError2=true}
                                            else if(this.isSubShow2==true){
                                            this.isSubShow2=false;
                                            this.isActive2=true;
                                                                this.hasError2=false}
                                    },
           showToggle3(){
                                            if(this.isSubShow3==false){
                                            this.isSubShow3=true;
                                             this.isActive3=false;
                                             this.hasError3=true}
                                            else if(this.isSubShow3==true){
                                            this.isSubShow3=false;
                                            this.isActive3=true;
                                            this.hasError3=false}
                                    }

        },
        created(){

        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
          },
        components:{

        },
        destroyed () {
          window.removeEventListener('scroll', this.handleScroll)
        }
   }
 </script>
<style>

</style>
