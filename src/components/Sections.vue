<template>
    <div id="Sections">
         <HeaderSec />
      
         <div   v-if="historyOption == 'Usuarios'">
             <Usuarios/>
         </div>
         <div  v-if="historyOption == 'Default'">
            <Usuarios/>
         </div>
        
    </div>
</template>
<script>

import {mapActions} from 'vuex';

import HeaderSec from '../components/HeaderSec.vue';
import Usuarios from '../views/usuarios/usuarios.vue'


export default {
  name: 'Sections',
components:{
      HeaderSec,
      Usuarios,
   
  },
 
   data(){
       return{
           search_value:'',
           status:'',
           message:'',
           option:'Default',
       }
   },
    computed:{
        historyOption(){
            return this.$store.getters["main/getHistoryOption"]
        },
    },
   created(){
        let option = localStorage.getItem('nav')
        if(option != undefined && option != null && option != ''){
            this.option = option
            this.setHistoryOptionMain(option)
        }
      
   },
   methods:{
        ...mapActions('main', ['setHistoryOptionMain']),
        ...mapActions('main', ['getHistoryOption']),
   }

   
    
 
}
</script>
<style scoped>
   
   #Sections{
    background: var(--color-5);
     min-height: 59.25VW;
     width: 78.17708333333333VW;
     margin-left: 4.166666666666666VW;
   }

   .proximamente p{
       color: var(--color-1);
       font-weight: 700;
       font-size: 5vw;
       margin-top: 11.5vw;
       margin-left: 15vw;
   }


  



</style>
