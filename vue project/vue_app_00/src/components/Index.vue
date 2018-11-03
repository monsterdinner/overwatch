<template>
<div class="app_index">
    <app-headers></app-headers>
 <section class="home-header">
     <div class="home-header__video-bg">
         <video   loop muted="muted">
             <source src="http://127.0.0.1:3001/img/video/1.mp4" type="video/mp4">
         </video>
     </div>
     <div class="column row ">
         <div class="show-for-xl u-relative">
             <img src="../img/logo-overwatch-full.png" alt="" class="home-header__logo"/>
         </div>
         <div class="u-relative">
             <h2 class="h3 home-header__tagline">“年度最佳运营游戏奖” - The Game Awards</h2>
         </div>
         <div class="u-center-block">
             <div class="table-cell u-relative">
                 <div class="home-header__button-container">
                     <a href="#" class="button">
                         <span>立即购买</span>
                     </a>
                     <a href="#" class="button m-sm m-white home-header__button home-header__button--watch hide-for-xxl show_video1"  @mouseenter="enter" @mouseleave="leave">
                         <span class="play-icon" :style="youj"></span>
                         <span>游戏介绍</span>
                     </a>
                 </div>
             </div>
         </div>
     </div>
 </section>
 <section class="news-panels">
     <div class="inner">
         <h2 class="h5">新闻公告</h2>
         <div class="grid-item">
             <div class="box">
                 <div class="container">
                     <a href="#" class="bg" style="background-image: url(../img/images0001e.jpg);"></a>
                     <div class="content">
                         <h3 class="title h6">
                             <a href="#" >
                                 2018“万圣夜惊魂”现已上线 购50箱补给送10箱
                             </a>
                         </h3>
                     </div>
                 </div>
             </div>
         </div>
         <div class="grid-item">
             <div class="box">
                 <div class="container">
                     <a href="#" class="bg" style="background: url(../img/images3ae.jpg);"></a>
                     <div class="content">
                         <h3 class="title h6">
                             <a href="#">
                                 暴雪战网商城现已支持花呗
                             </a>
                         </h3>
                     </div>
                 </div>
             </div>
         </div>
         <a href="#" class="button m-blue m-wide intro-button">查看所有新闻</a>
     </div>
 </section>
<section class="fight-section">
    <div class="bg-cairo bg-fftf"></div>
    <div class="bg-volskaya bg-fftf"></div>
    <div class="bg-london bg-fftf"></div>
    <div class="inner">
        <h2 class="intro-heading">为未来而战</h2>
        <p class="intro-text u-align-center u-center-block">
            军人、科学家、冒险家、奇人异士。
            <br/><br/>
            在人类陷入空前危机之时，来自全球各个国家的特种精英们，为了结束战争、重铸秩序而团结在了一起。他们，就是
            <strong>守望先锋</strong>
            <br/><br/>
            英雄们最终结束了这场危机，人类文明在随后的数十年内和平共存并迎来了一个探索、革新和发现的新时代。尽管如此，守望先锋在多年后逐渐被人们所遗忘，最终难逃被解散的命运。
            <br/><br/>
        </p>
        <p class="intro-text u-align-center u-center-block">
            如今，世界各地争端再起，人们都翘首期待着新英雄的出现，或旧英雄的归来。
            <br/><br/>
            你愿意与我们共同抗争吗？
        </p>
        <a href="#" class="button m-lg">搜索游戏</a>
    </div>
</section>
<section class="heroes-section">
    <div class="row column">
        <div class="u-max-width-container">
            <h2 class="intro-heading">各具特色的英雄</h2>
            <div class="intro-text">
                <p>
                    不论喜欢哪种游戏方式，你总能找到适合自己玩法的英雄。
                    <br/>
                    掌握他们独特的技能玩法，享受《守望先锋》的无穷乐趣！
                </p>
            </div>
        </div>
        <div class="full-width-container">
            <div class="spotlight">
                <div class="flex-container">
                    <div class="flex-item">
                        <h2 class="spotlight-header">{{minzi}}</h2>
                        <p class="spotlight-caption">{{jieshao}}</p>
                    </div>
                </div>
                <div class="u-max-width-container">
                    <div class="spotlight-image" :style="bgRenwu"></div>
                </div>
            </div>
        </div>
        <div class="u-max-width-container">
            <ul class="hero-portrait-group">
                <li class="u-inline-block u-relative" v-for="(item,index) in hero" @mouseover="heroFor(index)" :key="index">
                    <a href="" class="hero-portrait"  :class="{ isactive: index==ishas }" >
                      <div class="hero-portrait-image-mask">
                        <div class="hero-portrait-image" :style="item.head"></div>
                      </div>
                        <span class="hero-portrait-label" >{{item.name}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
 <section class="mountain-city"></section>
 <section class="prepurchase-section-desktop bg-museum content-box show-for-lg">
     <div class="fg-widowmaker-shoulder-rifle"></div>
     <div class="page-wrapper" style="margin-bottom: 150px;">
         <div class="row">
             <div class="lg-6 lg-offset-6 xl-5 xl-offset-6" style="text-align:center">
                 <h2 class="intro-heading-gradient-blue">这个世界需要英雄</h2>
                 <p class="intro-text">现在即是未来，你来吗？</p>
                 <a href="#" class="button m-lg" style="margin-top: 0;">立即购买</a>
             </div>
         </div>
     </div>
 </section>
 <app-top></app-top>
<app-footer></app-footer>
</div>
</template>
<script type="text/ecmascript-6">
import footer from './footer'
import headers from './headers'
import top from './top'
 export default{

        data(){
            return{
             youj:{},
             hero:[
                 {
                 name:"D.Va",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/dva/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/dva.png)",
                 brief:"一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。"
                 },
                  {
                 name:"奥丽莎",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/orisa/icon-portrait.png)",
                 body:"background-image: url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/orisa.png)",
                 brief:"维护努巴尼秩序并保护努巴尼人民的维和机器人。"
                 },
                  {
                 name:"莱因哈特",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/reinhardt/icon-portrait.png)",
                body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/reinhardt.png)",
                 brief:"一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。"
                 },
                  {
                 name:"路霸",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/roadhog/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/roadhog.png)",
                 brief:"一名残暴的杀手，因残忍和肆意破坏而臭名昭著。"
                 },
                  {
                 name:"温士顿",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/winston/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/winston.png)",
                 brief:"一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。"
                 },
                  {
                 name:"查莉娅",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/zarya/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/zarya.png)",
                 brief:"世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。"
                 },
                  {
                 name:"破坏球",
                 head:"background-image:url(http://overwatch.nosdn.127.net/1/images/heroes/wrecking-ball/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/wrecking-ball.png)",
                 brief:"驾驶这台滚动式坦克的是一只经过基因改造的仓鼠，他来自月球基地。"
                 },
                  {
                 name:"堡垒",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/bastion/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/bastion.png)",
                 brief:"一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。"
                 },
                 {
                 name:"末日铁拳",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/assets/images/hero/doomfist/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/doomfist.png)",
                 brief:"一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。"
                 },
                  {
                 name:"源氏",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/genji/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/genji.png)",
                 brief:"一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。"
                 },
                  {
                 name:"半藏",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/hanzo/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/hanzo.png)",
                 brief:"一名强大而致命的弓箭大师。"
                 },
                  {
                 name:"狂鼠",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/junkrat/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/junkrat.png)",
                 brief:"一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。"
                 },
                  {
                 name:"麦克雷",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/mccree/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/mccree.png)",
                 brief:"一名亡命天涯的神枪手，以自己的方式伸张正义。"
                 },
                  {
                 name:"美",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/frost/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/mei.png)",
                 brief:"一名能够操控天气，为了保护环境而选择战斗的科学家。"
                 },
                  {
                 name:"法老之鹰",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/pharah/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/pharah.png)",
                 brief:"一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。"
                 },
                  {
                 name:"死神",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/reaper/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/reaper.png)",
                 brief:"一名无情的杀手，一直在追杀前守望先锋的特工们。"
                 },
                 {
                 name:"士兵76",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/soldier-76/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/soldier-76.png)",
                 brief:"一名试图自己将守望先锋敌人绳之于法的独行侠。"
                 },
                  {
                 name:"黑影",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/sombra/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/sombra.png)",
                 brief:"臭名昭著的黑客，沉迷于揭秘——及其带来的权力。"
                 },
                  {
                 name:"秩序之光",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/symmetra/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/symmetra.png)",
                 brief:"一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。"
                 },
                  {
                 name:"托比昂",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/torbjorn/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/torbjorn.png)",
                 brief:"一名天才工程师，可以在战场上打造武器系统。"
                 },
                  {
                 name:"裂空",
               head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/tracer/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/tracer.png)",
                 brief:"一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。"
                 },
                  {
                 name:"黑百合",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/widowmaker/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/widowmaker.png)",
                 brief:"一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。"
                 },
                  {
                 name:"安娜",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/ana/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/ana.png)",
                 brief:"守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。"
                 },
                  {
                 name:"布里吉塔",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/brigitte/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/brigitte.png)",
                 brief:"一位渴望冒险，希望惩强扶弱的重装战士。"
                 },
                    {
                 name:"卢西奥",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/lucio/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/lucio.png)",
                 brief:"一位国际名人，通过音乐和巡演激发社会正能量。"
                 },
                  {
                 name:"天使",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/mercy/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/mercy.png)",
                 brief:"一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。"
                 },
                  {
                 name:"莫伊卡",
                 head:"background-image:url(http://overwatch.nos.netease.com/1/assets/images/hero/moira/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/moira-full-portrait.png)",
                 brief:"一位天才基因科学家，无视道德的束缚，一心追求科学发现。"
                 },
                  {
                 name:"禅雅塔",
                head:"background-image:url(http://overwatch.nos.netease.com/1/images/heroes/zenyatta/icon-portrait.png)",
                 body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/zenyatta.png)",
                 brief:"一位游走于世界寻找灵魂升华之道的机械僧侣。"
                 },

             ],
             ishas:0,
             minzi:"",
             jieshao:"",
             bgRenwu:{}
            }
        },
        methods:{
            heroFor(index){
               this.ishas=index;
               this.jieshao=this.hero[index].brief;
               this.minzi=this.hero[index].name;
               this.bgRenwu=this.hero[index].body;
            },
             enter(){
                this.youj={backgroundPosition:"0 0"}
               },
               leave(){
               this.youj={backgroundPosition:"0 -50px"}
               }
        },
        watch:{
          
        },
        created(){

        },
        components:{
           'app-footer':footer,
           'app-headers':headers,
           'app-top':top
        }
   }
 </script>
<style>
 .heroes-section:not(li) {
    text-align: center;
    background-image: url(../img/candy.jpg);
    background-position: top;
    background-size: cover;
}
.heroes-section .column {
    padding-left: 0; 
    padding-right: 0;
    text-align: center;
    width: 100%;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
}
.nameStyle{
        top: -8.4px;
    border-radius: .3rem;
    background-color: #f0edf2;
    color: #333;
}
.app_index .flex-container{
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 100%;
    min-height: 200px;
    position: absolute;
    padding: 10px 0 15px;
    top: calc(50% - 100px);
    text-align: right;
    background-image: linear-gradient(90deg,rgba(42,55,81,0) 0,rgba(42,55,81,.8) 25%,rgba(42,55,81,.8) 75%,rgba(42,55,81,0));
    background-position: 50%;
    background-size: 1920px auto;
    z-index: 0;
}
</style>