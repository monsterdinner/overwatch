<template>
<div class="app_index">
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
                                  <img src="../img/card-world-of-warcraft.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="../img/card-hearthstone.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="../img/card-heroes-of-the-storm.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="../img/card-starcraft.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="../img/card-starcraft-remastered.jpg" class="Navbar-posterImage" alt=""/>
                              </a>
                              <a href="#" class="Navbar-poster">
                                  <img src="../img/card-diablo.jpg" class="Navbar-posterImage" alt=""/>
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
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="../img/esports-ow.png" alt=""/>
                          <div class="navbar-esportLabel" >守望先锋电竞</div>
                      </a>
                      <div class="navbar-esport-sub">
                          <a href="#" class="navbar-esport-link">
                              <img src="../img/esports-overwatch.png" alt=""/>
                          </a>
                          <a href="#" class="navbar-esport-link">
                              <img src="../img/esports-overwatch-world-cup.png" alt=""/>
                          </a>
                          <a href="#" class="navbar-esport-link">
                              <img src="../img/esports-contenders.png" alt=""/>
                          </a>
                      </div>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="../img/esports-gold.png" alt=""/>
                          <div class="navbar-esportLabel">炉石传说黄金系列赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="../img/esports-heroes.png" alt=""/>
                          <div class="navbar-esportLabel">HGC黄金风暴联赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="../img/esports-sc2-wcs.png" alt=""/>
                          <div class="navbar-esportLabel">星际争霸II黄金职业联赛</div>
                      </a>
                      <a href="#" class="Navbar-esport ow-site  animation-delay-1">
                          <img src="../img/wariii .png" alt=""/>
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
 <section class="home-header">
     <div class="home-header__video-bg">
         <video   muted="muted">
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
                    <a href="" class="hero-portrait"  :class="{ isactive: index==ishas }">
                      <div class="hero-portrait-image-mask">
                        <div class="hero-portrait-image" :style="item.head"></div>
                      </div>
                        <span class="hero-portrait-label">{{item.name}}</span>
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
             <div class=" lg-6 lg-offset-6 xl-5 xl-offset-6">
                 <h2 class="intro-heading-gradient-blue">这个世界需要英雄</h2>
                 <p class="intro-text">现在即是未来，你来吗？</p>
                 <a href="#" class="button m-lg" style="margin-top: 0;">立即购买</a>
             </div>
         </div>
     </div>
 </section>
<div id="footer" class="ow-footer">
    <div class="footer">
        <div id="f-business" class="f-cb">
            <p class="f-cs">
                <a href="#">
                    <span class="icon icon-1"></span>在线客服
                </a>
                <a href="#">
                    <span class="icon icon-2"></span>反馈
                </a>
                <a href="#">
                    <span class="icon icon-3"></span>加入我们
                </a>
            </p>
        </div>
        <div class="cprt">
            <a href="#" class="logo_bz"></a>
               <a href="#" class="logo_ne"></a>
            <div class="info">
                <ul class="clearFix">
                    <li>
                        <a href="#">隐私</a>|
                    </li>
                    <li>
                        <a href="#">法律条款</a>|
                    </li>
                    <li>
                        <a href="#">API</a>
                    </li>
                </ul>
                <p>©2018 暴雪娱乐有限公司版权所有
                <span>由上海网之易网络科技发展有限公司运营</span>
               <a href="#"> 著作权侵权</a>
                    &nbsp;|&nbsp;
         <span>新广出审[2016]378号</span>
                </p>
                <p><span id="js_wenjinwang">文网游进字[2016]0025号</span>&nbsp;|&nbsp;<a href="#" >沪网文号〔2017〕9633-727号</a>&nbsp;|&nbsp;<a href="#" >增值电信业务经营许可证编号：沪B2－20080012</a></p>
                <p class="integrity">
                    <a href="#"><img src="../img/cprtFpolice.png" alt=""/></a>
                    <a href="#"><img src="../img/cprtFzx110.png" alt=""/></a>
                    <a href="#"><img src="../img/sgs-icon.png" alt=""/></a>
                    <a href="#"><img src="../img/cprtFicon20120516.png" alt=""/></a>
                    <a href="#"><img src="../img/cprtFemark.png" alt=""/></a>
                    <span>|  适龄提示：适合13岁及以上使用  </span>
                    <a href="#">家长监护工程></a>
                </p>
            </div>
            <div></div>
        </div>
        <p class="tips">
            积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。
        </p>
    </div>
</div>
</div>
</template>
<script type="text/ecmascript-6">

 export default{

        data(){
            return{
             fal:false,
             fal1:false,
             fal2:false,
             fal3:false,
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
                body:"background-image:url(http://overwatch.nos.netease.com/1/images/v2/home/overlay/genji.png)",
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
                 brief:""
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
              shownav(){
               if(this.fal==false){
               this.fal=true;
               this.fal3=true;
               }else if(this.fal==true){
               this.fal=false;
               this.fal3=false;
              }
               },
               shownav1(){
             if(this.fal1==false){
             this.fal1=true;
             this.fal3=true;
             }else if(this.fal1==true){
             this.fal1=false;
             this.fal3=false;
             }
             },
             shownav2(){
               if(this.fal2==false){
               this.fal2=true;
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
               enter(){
                this.youj={backgroundPosition:"0 0"}
               },
               leave(){
               this.youj={backgroundPosition:"0 -50px"}
               },

        },
        watch:{
          
        },
        created(){

        },
        components:{

        }
   }
 </script>
<style>
.hero-portrait.isactive>.hero-portrait-image-mask, .hero-portrait:active>.hero-portrait-image-mask, .hero-portrait:focus>.hero-portrait-image-mask, .hero-portrait:hover>.hero-portrait-image-mask {
    width: 84px;
    height: 100.8px;
    margin: -6px -1px;
    border-left-width: 3px;
    border-right-width: 3px;
    background-color: #f7931e;
}
.hero-portrait.is-active>.hero-portrait-label, .hero-portrait:active>.hero-portrait-label, .hero-portrait:focus>.hero-portrait-label, .hero-portrait:hover>.hero-portrait-label {
    top: -8.4px;
    border-radius: .3rem;
    background-color: #f0edf2;
    color: #333;
}
.u-relative{
    position: relative;
}
.navbar{
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(2,25,72,.3);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #fff;
    z-index: 10000;
}
.heroes-section p{
    color: #333;
}
.prepurchase-section-desktop p{
    color: #333;
}
.spotlight-caption, .spotlight-header {
    color: #f0edf2!important;
    padding-left: 64%;
    text-align: center;
}
.navbar:after{
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: solid 1px rgba(255,255,255,.15);
    pointer-events: none;
}
.navbar-container{
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-desktop{
    padding: 0 40px;
    height: 40px;
    position: relative;
    white-space: nowrap;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar a, .navbar div, .navbar img, .navbar nav, .navbar svg {
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-logo{
    height: 40px;
    width: 62px;
    background-image: url("../img/tubiao.png");
    background-repeat: no-repeat;
    background-position: -18px -75px;
    margin-right: 30px;
    position: relative;
    display: inline-block;
    color: #009ae4;
}
.navbar-logo:hover{
    background-position: -18px -119px;
}
.navbar-items{
    display: inline-block;
    vertical-align:top !important;
}
.nav-shadow{
    text-shadow: 0 0 15px #fff, 0 0 30px rgba(255,255,255,.3);
}
.navbar-item{
    height: 40px;
    font-size: 15px;
    margin-right: 30px;
    color: #fff;
    position: relative;
    display: inline-block;
    padding: 0;
    line-height: 1.4;
    color: rgba(255,255,255,.7);
    background: 0 0;
    white-space: nowrap;
    transition: color 200ms,background-color 200ms,border-color 200ms;
    text-transform: uppercase;
}
.navbar-label:hover{
    text-shadow: 0 0 15px #fff, 0 0 30px rgba(255,255,255,.3);
}
.navbar-label{
    height: 40px;
    line-height: 40px;
    display: inline-block;
}
.navbar-icon{
    width: 14px;
    height: 7px;
    background-image:url("../img/tubiao.png");
    background-position: -147px -131px;
    background-repeat: no-repeat;
    display: inline-block;
    margin-left: 2px;
    color: rgba(255,255,255,.3);
    transition: color 200ms,background-color 200ms,border-color 200ms;
    position: relative;
}
.navbar-right{
    right: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
}
.Navbar {
    position: relative;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #fff;
    z-index: 10000;
}
.navbar-modals{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    vertical-align: baseline
}
 .Navbar-icon svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    fill: currentColor;
    pointer-events: none;
}
.nav-modal{
    left: 0;
    right: 0;
    top: 39px;
    position: absolute;
    background: radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95)100%);
    border: solid 1px rgba(255,255,255,.15);
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2);
    opacity: 1;
    display:block;
    z-index: 2;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-tick{
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-top: solid 1px rgba(255,255,255,.15);
    border-right: solid 1px rgba(255,255,255,.15);
    background-color: #283244;
    opacity: .95;
    transform: translate(-50%,-50%) rotate(-45deg);
    transform-origin: center;
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-tickInner{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 1px transparent;
    background-color: #151a23;
    opacity: 0;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-modalContent{
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-gamePublishers{
    padding: 0 40px;
    display: table;
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    border-top: 0;
text-align: center;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-gamePublisher{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: table-cell;
    position: relative;
    vertical-align: top;
    text-align: center;
}
.navbar-gamePublisher:last-child {
    padding-right: 0;
}
.navbar-gamePublisher:first-child {
    padding-left: 0;
}
.navbar-posters {
    display: block;
    text-align: center;
    font-size: 0;
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-poster{
    width: calc(12.5% - 17.5px);
    position: relative;
    display: inline-block;
    height: 180px;
    min-width: 0;
    max-width: none;
    overflow: hidden;
    box-shadow: 0 8px 17px rgba(0,0,0,.1);
    margin: 15px 20px 15px 0;
    font-size: 0;
    transition: border-color .2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-poster::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid rgba(255,255,255,.15);
    pointer-events: none;
}
.Navbar-poster img{
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 180px;
    width: 216px;
    -webkit-filter: brightness(100%) contrast(100%);
    filter: brightness(100%) contrast(100%);
    transition: -webkit-filter .2s;
    transition: filter .2s;
    transition: filter .2s,-webkit-filter .2s;
    max-width: 200%;
}
.Navbar-imagePanel>:nth-child(1) {
    animation-delay: -400ms;
}
.Navbar-posterImage{
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 180px;
    width: 216px;
    -webkit-filter: brightness(100%) contrast(100%);
    filter: brightness(100%) contrast(100%);
    transition: -webkit-filter .2s;
    transition: filter .2s;
    transition: filter .2s,-webkit-filter .2s;
}
.navbar-esportsLogos{
    display: table;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;

}
.navbar-esportsLogos .Navbar-esport{
    padding: 20px 0;
    font-size: 15px;
    display: table-cell;
    position: relative;
    vertical-align: top;
    width: 16vw;
    max-width: 192px;
    line-height: 1.4;
    text-decoration: none;
    color: rgba(255,255,255,.7);
    text-align: center;
}
.navbar-esport-sub{
    width: 0;
    opacity: 0;
    overflow: hidden;
    display: block;
    position: relative;
    vertical-align: top;
    max-width: 100px;
    background-color: rgba(21,26,35,1);
    border-left: 1px solid rgba(0,0,0,.2);
    border-right: 1px solid rgba(0,0,0,.2);
    transition: all .4s ease;
}
.navbar-esport-link{
    display: block;
    width: 100px;
    margin: -6px 0;
    text-align: center;
}
.Navbar-esport img{
    width: 16vw;
    max-width: 192px;
    height: 16vw;
    max-height: 192px;
    box-sizing: border-box;
    vertical-align: baseline;
}
.animation-delay-1 {
    -webkit-animation-delay: 50ms;
    animation-delay: 50ms;
}
.navbar-esportsLogos .navbar-esportLabel{
    padding: 0 20px;
    margin-bottom: 20px;
    font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit;
    box-sizing: border-box;
}
.navbar-modalSection{
    height: 50px;
    padding: 0;
    border-top: 1px solid rgba(255,255,255,.08);
    text-align: center;
}
.navbar-gameMenuItem{
    font-size: 16px;
    margin: 0 20px;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: rgba(255,255,255,.7);
    transition: color 200ms,background-color 200ms;
    animation-timing-function: ease-out;
    animation-name: Navbar-dropdown-drop-in-delayed;
    animation-duration: 600ms;
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-icon{
    display: inline-block;
    color: #00aeff;
    transition: color 200ms,background-color 200ms;
    width: 1.5em;
    height: 1.5em;
    position: relative;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-gameMenuItemLabel{
    display: inline-block;
    margin-left: 5px;
    font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar-constrained{
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    vertical-align: baseline;
    z-index: 2;
}
 .Navbar-accountDropdown {
    right: 50px;
    width: 100%;
    max-width: 20em;
    border-top: 0;

     position: absolute;
     background: radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95)100%);
     border: solid 1px rgba(255,255,255,.15);
     box-shadow: 0 8px 17px 0 rgba(0,0,0,.2);

}
.Navbar-modalContent{
    background: linear-gradient(to bottom,#283244 0,rgba(21,26,35,.95)100%);
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-accountDropdownLoggedOut{
    background-color: rgba(0,0,0,.1);

    box-sizing: border-box;
    vertical-align: baseline;
}
.footer .cprt .info ul li {
    float: left;
    list-style: none;
    color: #ccc;
}
.footer .cprt .info ul li a {
    color: #ccc;
    padding: 0 10px;
    font-size: 14px;
}
.Navbar-modalSection1{
    padding: 20px;
    box-sizing: border-box;
    vertical-align: baseline;

}
.Navbar-accountDropdownButtonLink{
    box-sizing: border-box;
    vertical-align: baseline;
}
.is-full{
    width: 100%;
}
.Navbar-button{
    display: inline-block;
    position: relative;
    background-color: #0e86ca;
    border: solid 1px #00aeff;
    font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #fff;
    padding: 10px 50px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    outline: 0;
    overflow: visible;
    max-width: 100%;
    transition: color 200ms,background-color 200ms,border-color 200ms;
    border-radius: 0;
    letter-spacing: normal;
    text-transform: none;
}
.Navbar-accountDropdownLink{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: solid 1px rgba(255,255,255,.08);
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-decoration: none;
    color: rgba(255,255,255,.7);
    transition: color 200ms,background-color 200ms;
    box-sizing: border-box;
    vertical-align: baseline;
}
.Navbar-accountDropdownLinkIcon{
    display: inline-block;
    color: #00aeff;
    transition: color 200ms,background-color 200ms;
    width: 1.5em;
    height: 1.5em;
    margin-right: 5px;
    background-image: url("../img/tubiao.png");
    background-repeat: no-repeat;
    position: relative;
    box-sizing: border-box;
    vertical-align: baseline;
}
.zhanghao{
    background-position: -141px -14px;
}
.zhuce{
    background-position: -198px -16px;
}
.Navbar-accountDropdownLinkLabel{
    display: inline-block;
    font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
}
.navbar1{
    position: fixed;
    top: 44px;
    left: 0;
    width: 100%;
    display: block;
    z-index: 97;
}
.navbar1-main{
    margin: 20px 20px 0;
    background-color: rgba(40,53,79,.9);
    position: relative;
    z-index: 96;
}
.navbar1-main:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.nav-left{
    float: left;
    font-size: 0;
    margin: 0;

}
.nav-logo{
    width: 245px;
    height: 62px;
    background: url("../img/nav-logo-sm.png") no-repeat center center;
    display: inline-block;
}
.nav-menu{
    float: left;
    font-size: 0;
    margin: 0;
}
.nav-menu li{
    display: inline-block;
    height: 100%;
    position: relative;
    font-size: inherit;
}
.nav-btn{
    padding: 24px 12px 22px;
    font-size: 1.6rem;
    min-width: 99px;display: inline-block;
    border-bottom: 0 solid transparent;
    box-sizing: border-box;
    line-height: 1;
    font-family: "microsoft yahei",arial,sans-serif;
    text-transform: none;
    color: rgba(255,255,255,.85);
    text-align: center;
    text-shadow: none;
    letter-spacing: .05em;
    position: relative;
    cursor: pointer;
    -webkit-transition: background-color .2s;
    transition: background-color .2s;
}
.nav-btn:hover{
    background-color: hsla(0,0%,100%,.1);
    -webkit-transition: none;
    transition: none;
    color: #fff;
}
.m-has-children:after{
    content: "";
    background-image: url(../img/caret-gray.png);
    width: 12px;
    height: 7px;
    background-position: 50%;
    display: inline-block;
    margin: 0 0 2px 8px;
}
.nav-sub-menu{
    margin: 0;
    background-color: rgba(61,73,96,.95);
    position: absolute;
    top: 100%;
    display:none;
    width: 150px;
    left: 0;
    height: auto;
    z-index: 99;
}
.nav-sub-menu li{
    height: 100%;
    position: relative;
    display: block;
}
.menu-btn{
    width: 100%;
    text-align: left;
    font-weight: 100;
    font-size: 14px;
    padding: 15px 0;
    border: none;
    display: block;
    font-family: "microsoft yahei",arial,sans-serif;
    text-transform: none;
    color: rgba(255,255,255,.85);text-shadow: none;
    letter-spacing: .05em;
    position: relative;
    cursor: pointer;
}
.btn.m-blue-filled:hover, .btn.m-blue:hover, .button.m-blue-filled:hover, .button.m-blue:hover, button.m-blue-filled:hover, button.m-blue:hover {
    background-color: #0cbdff;
}
.btn.is-active, .btn:hover, .button.is-active, .button:hover, button.is-active, button:hover {
    border-color: #ffb033;
    background-color: #ffb033;
    -webkit-transition: none;
    transition: none;
}
.nav-right{
    float: right;
    font-size: 0;
    margin: 0;
}
.m-orange{
    font-weight: 700;
    background-color: #f7931e;
}
.nav-right .m-orange:hover{
    background-color: #f89e35;
}
.m-sub-menu:before{
    content: "";
    width: 100%;
    background-color: red;
}
.m-highlight:before{
    content: "|";
    bottom: auto;
    left: auto;
    width: auto;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    position: relative;
    display: inline-block;
    color: transparent;
    margin: 0 3px 0 0;
    top: -1px;
    -webkit-transition: color .2s;
    transition: color .2s;
}
.nav-border{
    height: 2px;
    background-color: rgba(0,0,0,.25);
    position: absolute;
    width: 100%;
    bottom: -2px;
}

.home-header{
    margin-top: 0;
    padding-bottom: 17vh;
    background-image: none;
    min-height: 720px;
    height: 100vh;
    background-color: #48597d;
    padding-top: 128px;
}
.home-header__video-bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.home-header__video-bg:after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(180deg,transparent,transparent 56%,rgba(12,11,14,.62) 91%,rgba(12,11,14,.91));
}
.home-header__video-bg video{
    position: absolute;
    display: block;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.column{
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    width:100%;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
}
.row:before{
    content: ' ';
    display: table;
    flex-basis: 0;
    -webkit-box-ordinal-group: 2;
    order: 1;
}
.row:after{
    content: ' ';
    display: table;
    flex-basis: 0;
    -webkit-box-ordinal-group: 2;
    order: 1;
    clear: both;
}
.u-relative{
    position: relative;
}
.home-header__logo{
    margin-top: 30px;
    margin-bottom: -40px;
    min-width: 350px;
    width: 50vmin;
    margin-left: 2vmin;
}
.home-header__tagline{
    color: #f6f6f6;
    padding-top: 12px;
    font-family: Big Noodle Too,impact,sans-serif;
    font-style: italic;
    font-weight: 400;
}
.u-center-block{
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.table-cell{
    display: table-cell;
}
.home-header__button-container{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}
.button{
    display: inline-block;
    text-align: center;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    vertical-align: middle;
    border-radius: 2px;
    padding: 6px 45px;
    text-transform: none;
    border: none;
    outline: 0;
    border: 3px solid #ff9c00;
    background-color: #ff9c00;
    color: #fff;
    line-height: 1;
    letter-spacing: .025em;
    font-weight: 700;
    font-size: 1.6rem;
    -webkit-transition: all .2s;
    transition: all .2s;
    text-shadow: none;
    text-decoration: none;
}
.btn.m-sm, .button.m-sm, button.m-sm{
    font-size: 1.28rem;
    border-width: 1px;
    padding: 6px 9px;
    margin-top: 18px;
}
.btn.m-white, .button.m-white{
    border-color: transparent;
    background-color: #fff;
    color: #333;
}
.play-icon{
    width: 17px;
    height: 20px;
    padding-right: 8px;
    display: inline-block;
    background: url("../img/arraw.png") no-repeat 0 -50px;
}
.m-white:hover{
    border-color: #fff;
    background-color: transparent;
    color: #fff;
}
.news-panels{
    margin: 0 0 70px;
    text-align: center;
    width: 100%;
    height: 100%;
}
.news-panels::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.inner{
    padding: 0 30px;
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    text-align: center;
}
.inner h2{
     text-align: center;
     margin: 30px 0 30px;
     font-style: normal;
}
.inner::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.grid-item{
    width: 50%;
    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 0.8333%;
    float: left;
    position: relative;
    color: #f0edf2;
    -ms-text-align-last: right;
    text-align:left;
}
.news-panels .grid-item .box{
    padding-bottom: 44.2697%;
    background-color: rgba(255,255,255,.25);
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    transition: all .2s;
}
.news-panels .grid-item .container{
    overflow: hidden;
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border-radius: 3px;
}
.news-panels .grid-item .bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-sizing: border-box;
    width: auto;
    height: 100%;
    display: block;
}
 .intro-button {
    margin-top: 25px;
}
.button.m-wide{
    font-size: 2rem;
    padding: 7.5px 65px;
}
.button.m-blue{
    border-color: transparent;
    background-color: #00a5e2;
    color: #fff;
}
.btn.m-lg, .btn.m-wide, .button.m-lg, .button.m-wide, button.m-lg, button.m-wide {
    font-size: 2rem;
}
.container .content{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.75);
    padding: 15px 20px;
    box-sizing: border-box;
}
.news-panels .grid-item .title {
    text-transform: none;
    color: #f0edf2;
}
.title a {
    color: #f0edf2;
}
.fight-section{
    background: 0 0;
    color: #f0edf2;
    text-shadow: 1px 2px 3px  rgba(51,51,51,.5);
    letter-spacing: .05em;
    padding: 80px 0 95px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,.4);
    display: block;
    width: 100%;
    max-width: 100%;
}
.bg-fftf{
    opacity: 1;
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.bg-cairo{
    background-size: cover;
    background-position: center top;
    background-image: url("../img/cairo-desktop1.jpg");
}
.navbar-desktopOverlay{
    display:block;
    animation-duration: 200ms;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    }
.bg-volskaya{
    background-size: cover;
    background-position: center top;
    background-image: url("../img/volskaya.jpg");
    display: none;
}
.bg-london{
    background-size: cover;
    background-position: center top;
    background-image: url("../img/london-2560.jpg");
    display: none;
}
.intro-heading{
    text-shadow: 0 4px 5px rgba(60,72,96,.5);
    margin-bottom: 44px;
    text-transform: none;
    font-style: italic;
    font-size: 5.8rem;
    font-weight: 400;
    font-variant: normal;
    line-height: normal;
    letter-spacing: .8px;
    color: inherit;
    text-rendering: optimizeLegibility;
}
.intro-text{
    line-height: 1.47;
    margin-bottom: 3.6rem;
    font-size: 2.4rem;
    font-weight: 400;
    margin-top: .5em;
    color: inherit;
}
.intro-text p{
    font-size: 2.4rem;
    line-height: 1.6;
}
.h2, h2 {
    font-size: 5.8rem;
}
.u-align-center {
    text-align: center;
}
.u-center-block {
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.m-lg{
    margin-top: 30px;
    font-size: 2rem;
    padding: 6px 30px;
    color: #fefefe;
}
.footer a {
    text-decoration: none;
    padding-top: 5px;
    color: #fff;
    font-weight: 400;
}
a {
    text-decoration: underline;
}
.ow-footer{
    height: 358px;
    background: #202020;
}
#footer {
    margin: 0;
    padding: 0;
    position: relative;
    line-height: 26px;
    width: auto;
    z-index: 3;
    font-size: 12px !important;
}
.ow-footer #f-business {
    padding-top: 40px;
}
#f-business {
    width: 1000px;
    position: relative;
    left: 50%;
    margin-left: -500px;
    color: #fff;
    z-index: 100;
    padding-top: 79px;
    font-size: 14px;
}
.ow-footer #f-business {
    padding-top: 40px;
}
#f-business .f-cs {
    float: left;
    font-size: 14px;
}
#f-business .f-cs a {
    color: #fff;
    margin-right: 37px;
    vertical-align: middle;
}
.ow-footer #f-business .icon {
    background: url(../img/sprite-24-blue.png) no-repeat;
    width: 24px;
    height: 24px;
    top: -2px;
}
#f-business .icon-1, #f-business .icon-2, #f-business .icon-3 {
    display: inline-block;
    position: relative;
    margin-right: 10px;
}
.icon-1{
    background-position: -96px 0;
}
.icon-2{
    background-position: -144px -24px;
}
.icon-3{
    background-position: -24px -119px;
}
.cprt{
    clear: both;
    padding-top: 50px;
    border-bottom: 1px solid rgba(255,255,255,.15);
    overflow: hidden;
    padding-bottom: 20px;
}
.footer .cprt {
    text-align: left;
    width: 1000px;
    margin: 0 auto 8px;
    position: relative;
}
.ow-footer .logo_bz {
    background: url(../img/layoutblizzard.png) no-repeat 0 0;
    top: 4px;
}
.footer .logo_bz {
    display: inline-block;
    width: 140px;
    height: 80px;
    overflow: hidden;
    vertical-align: top;
    margin: 0;
    position: relative;
}
.footer .cprt .info ul li {
    float: left;
    list-style: none;
}
.footer .logo_ne{
    display: inline-block;
    background: url(../img/logo_ne.png) no-repeat 0 0;
    width: 125px;
    height: 38px;
    overflow: hidden;
    vertical-align: top;
    position: relative;
    top: 39px;
    margin: 0;

}
.ow-footer .cprt .info, .ow-footer .cprt .info a {
    color: rgba(255,255,255,.5);
}
.footer .cprt .info {
    width: 706px;
    float: right;
    text-align: left;
    padding: 0 0 0 73px;
    vertical-align: middle;
    position: relative;
    box-sizing: border-box;

}
.footer .cprt .info ul {
    margin: 0 0 0 -10px;
    padding: 0 0 5px;
    overflow: hidden;
    list-style: none;
}
.ow-footer .cprt .info ul {
    margin-bottom: 3px;
}
.ow-footer .cprt .info p {
    line-height: 20px;
    vertical-align: top;
}
.footer .info p {
    font-size: 12px;
    margin: 0;
    line-height: 20px;
    font-weight: 400;
}
.ow-footer .cprt .info p {
    line-height: 20px;
    vertical-align: top;
}
.footer .info p {
    font-size: 12px;
    margin: 0;
    line-height: 20px;
    font-weight: 400;
}
.footer .integrity a {
    margin-right: 5px;
}
.ow-footer .tips {
    color: rgba(255,255,255,.3);
}
.footer .tips {
    text-align: center;
    clear: both;
    position: relative;
    font-size: 12px;
    line-height: 20px;
}
.heroes-section{
    text-align: center;
    background: url(../img/candy.jpg) no-repeat top;
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 80px;
}
.row{
    float: none;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
}
.row:after {
    clear: both;
}
.row:after, .row:before {
    content: ' ';
    display: table;
    flex-basis: 0;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
}
.u-align-center{
    text-align: center;
}
.column{
    width: 100%;
    padding-left:0;
    padding-right: 0;
}
.u-max-width-container{
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
}
.u-max-width-container .intro-heading{
    text-shadow: 0 4px 5px rgba(60,72,96,.5);
    margin-bottom: 44px;
    text-transform: none;
    font-style: italic;
    color:#3f6493;
}
.intro-text {
    font-size: 2.4rem;
}
p {
    font-size: inherit;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-rendering: optimizeLegibility;
}
.prepurchase-section-desktop .intro-text {
    line-height: 1.47;
    margin-bottom: 3.6rem;
}
.xl-offset-6 {
    margin-left: 50%;
}
.xl-5 {
    width: 41.66667%;
}
.intro-text{
    max-width: 40em;
    display: table;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.47;
    margin-bottom: 3.6rem;
    font-size: 2.4rem;
    font-weight: 400;
    color: inherit;
}
.spotlight{
    position: relative;
    text-shadow: 0 0 1px #405275;
    font-size: 1.6rem;
    line-height: 1.5;
}
.body.home .spotlight:before {
    content: '';
    position: absolute;
    top: 59%;
    left: 0;
    right: 0;
    padding-top: 28.07%;
    background-image: url(../img/glow.png);
    background-size: cover;
}
.flex-container{
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
.flex-item{
    -webkit-box-flex:0 ;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
}
.spotlight-header{
    color: #f0edf2;
    padding-left: 64%;
    text-align: center;
    text-shadow: 0 1px 2px #000;
    font-size: 5.8rem;
    font-style: italic;
    font-weight: 400;
    font-variant: normal;
    line-height: normal;
    letter-spacing: .8px;

}
.spotlight-caption{
    color: #f0edf2;
    padding-left: 64%;
    text-align: center;
    min-height: 48px;
    margin-top: .5em;

}
.spotlight-image{
    position: relative;
    left: -270px;
    display: inline-block;
    min-width: 746px;
    min-height: 440px;
    margin: 0 auto;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    z-index: 0;
}
.hero-portrait-group{
    padding: 0;
}
.u-inline-block{
    display: inline-block;
}
.u-relative{
    position: relative;
}
.hero-portrait{
    display: inline-block;
    text-align: center;
    position: relative;
    padding-bottom: 2rem;
    transition: all .1s cubic-bezier(.19,1,.22,1);
}
.hero-portrait-image-mask{
    display: block;
    position: relative;
    width: 70px;
    height: 84px;
    margin: 2.4px 6px;
    border: 3px solid #f0edf2;
    background-color: rgba(51,51,51,.9);
    background-clip: padding-box;
    overflow: hidden;
    border-radius: 7px;
    transform: skew(25rad);

}
.hero-portrait-image{
    display: inline-block;
    width: calc(100% + 10px);
    height: 100%;
    background-size: auto 100%;
    background-position: 50% 50%;
    position: relative;
    transform: skew(-25rad) translateX(-5px);
}
.hero-portrait-label{
    position: relative;
    display: inline-block;
    top: -4.2px;
    margin-left: -10px;
    padding: 1px 10px;
    font-size: 1.3rem;
    color: #333;
    white-space: nowrap;
}

.hero-portrait:hover{
    transition: all 110ms cubic-bezier(.075,.82,.165,1);
    outline: 0;
    color: #f9ab4f;
}
.mountain-city{
    background-attachment: fixed;
    min-height: 33.5rem;
    background-position: center 16%;
    background-image: url(../img/dorado-desktop.jpg);
    background-size: cover;
}
.prepurchase-section-desktop{
    text-align: center;
    position: relative;
    border-top: 1px solid rgba(255,255,255,.4);
}
.bg-museum {
    background-image: url(../img/bg-museum.jpg);
    background-size: cover;
    background-position: center top;
}
.content-box{
    padding-top: 80px;
    padding-bottom: 80px;
}
.fg-widowmaker-shoulder-rifle{
    width: 50%;
    height: 118%;
    background-image: url(../img/widowmaker-default-mobile.png);
    background-size: 100% auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center top;
}
.page-wrapper{
    padding-left: 30px;
    padding-right: 30px;
}
.fg-widowmaker-shoulder-rifle .column{
    width: 100%;
    float: left;
    padding-left: 0;
    padding-right: 0;
}
.xl-5{
    width: 41.66667%;
}
.xl-offset-6{
    margin-left: 50%;
}
.prepurchase-section-desktop .intro-text{
    line-height: 1.47;
    margin-bottom: 3.6rem;
}
.intro-heading-gradient-blue {
    text-shadow: 0 4px 5px rgba(60,72,96,.5);
    color: #3f6493;
    font-size: 5.8rem;
}
.h2, h2 {
    font-size: 3.90625rem;
    font-style: italic;
    font-weight: 400;
    font-variant: normal;
    line-height: normal;
    letter-spacing: .8px;
}
</style>