<template>
   <a href="#top"  id="gotop" @click="toTop"  v-show="ttt" class="top">top</a>
</template>
<script>
  export default{
      data(){
          return{
             ttt:false,
            
          }
      },
        methods:{
             handleScroll () {
              var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                 if(scrollTop<200){
                 this.ttt=false;
            }else{
                this.ttt=true;
            }
             },
           toTop(){
              
                let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
                let step = distance/50; //每步的距离
                (function jump(){
                if(distance > 0){
                distance-=step;
                window.scrollTo(0,distance);
                setTimeout(jump,10)
                }
                })();
                }
        },
         mounted () {
  window.addEventListener('scroll', this.handleScroll)
  var sss=setInterval(()=> { 
        this.weiyi-=1;
        if(this.weiyi<-150){
            clearInterval(sss)
        }
      }, 20)
      
},
        created() {
           
        },
  }
</script>
<style>
 .top{
     transition: all 1s ease-in;
 }
 #gotop {
    width: 40px;
    height: 30px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255,255,255,.25);
    color: #000;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    font-size: 12px;
    z-index: 501;
    cursor: pointer;
    display: block;
}
</style>
