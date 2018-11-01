<template>
    <li @mouseover="showToggle" @mouseout="showout" >
       <a href="#" class="nav-btn" :class="{ 'mm-has-children':hasError ,'m-has-children': isActive }" >
           {{title}}
       </a>
       <ul class="nav-sub-menu m-sub-menu" v-show="isSubShow">
           <li v-for="(item,index) in navfor" :key="index">
               <router-link :to="item.site" class="menu-btn m-highlight">{{item.word}}</router-link>
           </li>
       </ul>
   </li>
</template>
<script>
  export default{
      data(){
          return{
              isActive:true,
              hasError: false, 
              isSubShow:false,
          }
      },
        methods:{
          showToggle(){
                     if(this.isSubShow==false){
                     this.isSubShow=true;  
                     this.isActive=false;
                     this.hasError=true;  
                     }
                     else if(this.isSubShow==true){

                     this.isSubShow=false;
                    this.isActive=true;
                    this.hasError=false
                     }
             },
             showout(){
          
                    this.isSubShow=false;
                    this.isActive=true;
                    this.hasError=false
             }
        },
        created() {
            console.log(this.navfor)
        },
        props:['title','navfor',]
  }
</script>