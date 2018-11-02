<template>
    <li class="sub-nav-item" :style="{left:wei}" :class="{bg:isbg}" @mouseover="side" @mouseout="sideout" @click="sideon(targetIndex)">
                <a class="sub-nav-btn active" :href="sideId">
                    <svg class="icon sub-nav-icon" viewBox="0 0 32 32">
                         <path v-for="(item,index) in sideItem" :key="index" :d="item"></path>
                    </svg><span class="sub-nav-text">
                        {{sideName}}
                        </span></a>
            </li>
</template>
<script>
  export default{
      data(){
          return{
           wei:"",
           bgc:"",
           isbg:0
          }
      },
        methods:{
          side(index){
              this.wei=0;
          },
          sideout(){
              this.wei="100%";
          },
          sideon(){
            
          }
        },
        created() {
           
        },
        props:['sideName','sideItem','sideId']
  }
</script>
<style>
.bg{
  background-color: #00c3ff !important;
}
</style>
