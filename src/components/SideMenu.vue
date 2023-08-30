<template>
    <div id="SideMenu" class="dflx">
      <div class="box-1">
            <div class="logo">
                    <img src="../assets/logo.png" alt="logo aplicación">
            </div>
            <div class="msg-user">
                <p>¡HOLA, <span>{{identity.name | splitUp }}!</span></p>
            </div>
            <div class="menu">
                <ul>
                    <li  :class="{active : navOption == 'Dashboard' }"  @click="activeMenu(0),setOption('Mi Página')">  <div class="text-menu">MI <span>  PÁGINA</span></div> <div v-if="navOption == 'Mi Página'" class="icon-active"> <div class="ico"></div></div> </li>
                    <li :class="{active : navOption == 'Perzonalizacion' }" @click="activeMenu(0),setOption('Perzonalizacion')"><div class="text-menu"> <span>PERSONALIZACIÓN</span> </div><div v-if="navOption == 'Perzonalizacion'" class="icon-active"><div class="ico"></div> </div></li>
                    <li :class="{active : navOption == 'Usuarios' }" @click="activeMenu(0),setOption('Usuarios'), setHistoryOptionUsr('Default')"> <div class="text-menu"><span>USUARIOS</span></div> <div v-if="navOption == 'Usuarios'" class="icon-active"> <div class="ico"></div></div></li>
                    
                </ul>
            </div>
      </div>
      <div class="box-2">
         <div class="triangulo"> </div>     
      </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex';
export default {
  name: 'SideMenu',
 data() {
        return {
            navOption:'Default'  ,
            hidemenu:false,
        }
},
created(){
       this.getIdentity()
},
  computed:{
      identity() {
      return this.$store.getters['admin/getIdentity'];
    },
  },
  methods:{
      ...mapActions('main', ['setHistoryOptionMain']),
         ...mapActions('usuarios', ['setHistoryOptionUsr']),
  
     activeMenu(value){
         if(value ==1){
              this.hidemenu? this.hidemenu = false: this.hidemenu = true;
         }  else{
             this.hidemenu =false
         }
        
     },
         getIdentity: async function (){
          let response =  await this.$store.dispatch("admin/getData");
          return response
      },
    

     
      setOption: function(option){
       if(option == 'MenuR'){
            this.navOption = option
       }else{
           this.navOption = option
            localStorage.setItem('nav',option)
            this.setHistoryOptionMain(option)
       }
         

          
      },
    
        
  },
   filters:{
    
        splitUp: (value) => {
            if (!value) return '';
            value = value.toString();

            let splitStr = value.toUpperCase().split(' ');
           

           
             return  splitStr[0].charAt(0) + splitStr[0].substring(1);     

        },
       
        
 }


}
</script>
<style scoped>
   #SideMenu{
    min-height: 59.25VW;
   }

   .box-1{
       width: 16.614583333333332VW;
       background: var(--color-2);
   }.logo{
       margin-top: 4.166666666666666VW;
       margin-left: 2.03125VW;
   }.logo img{
       width: 12.604166666666666VW;
       height: 4.583333333333333VW;
   }.msg-user{
        margin-left: 2.03125VW;
        margin-top: 0.78125VW;
      width: 12.552083333333334VW;
       height: 2.03125VW;
        background: var(--color-5);
           border-radius: 1vw;
   }.msg-user p{
       color: var(--color-1);
       text-align: center;
       height: 2.03125VW;
       padding-top: .5vw;
        font-weight: 500;
       margin: 0px;
       font-size: 0.625VW;
   }.msg-user p span{
       font-weight: 800;
   }

   .box-2{
       width: 4.21875VW;
   }.triangulo{
     width: 0;
     height: 0;
     border-right: 4.21875VW solid transparent;
     border-top: 4.21875VW solid var(--color-2);
   }

    .menu{
        margin-top: 5.677083333333333VW;   
     }
   

     li.submenu {
         border: none !important;
     }
     .menu ul{
         margin-left: 2.03125VW;
         padding: 0vw;
     }
   .menu ul li{
       
        height: 1.6VW;
        width: 11.352083VW;
        border: 1px solid var(--color-5);
        color: var(--color-5);
        border-radius: 1.2vw;
        padding-left: 1vw;
        padding-top: .5vw;
        padding-bottom: .2vw;
        margin-bottom: 0.6020833333333334VW;
        cursor: pointer;
        display: flex;
        font-size: 0.7291666666666666VW;
    }.menu ul li span{
        font-weight: 700 ;
       
    }

    .text-menu{
         width: 9.5vw;
         padding-top: .1vw;
    }

    .active{
        background: var(--color-6);
        
    }

    li.active {
        border:0px !important
    }
    .icon-active, .icon-active-menu{
        width: 1.3031249999999999VW;
        height: 1.3031249999999999VW;
        background: var(--color-5);
        border-radius: 1vw;
        
    }.ico{
        width: 0.6515624999999999VW;
        height: 0.6515624999999999VW;
        background: var(--color-2);
        border-radius: 1vw;
        margin-top: .33vw;
        margin-left: .34vw;
        
    }.ico-2{
     margin-top:.55vw;
     margin-left: .3vw;
     width: 0; 
     height: 0; 
     border-right: 0.364583vw solid transparent;
     border-top: 0.364583vw solid var(--color-2);
     border-left: 0.364583vw solid transparent;
     border-bottom: 0.364583vw solid transparent;
    }




</style>
