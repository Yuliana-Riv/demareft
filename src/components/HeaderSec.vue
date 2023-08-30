<template>
<div id="HeaderSec">
        <div class="dflx">
            <div class="titles">
               
            <div v-if="historyOption == 'Perzonalizacion'">
                <h3>PERSONALIZACIÓN</h3>
                <p>Selección de Perfiles de Color</p>
            </div>
            
            <div v-else-if="historyOption == 'Usuarios'">
                <div v-if="historyOptionUsr == 'Default'">
                     <h3>USUARIOS </h3>  <p>Accesos permitidos al administrador</p>
                </div>
                <div v-if="historyOptionUsr == 'Add'">
                     <h3>USUARIOS </h3>  <p>Agregar nuevo usuario</p>
                </div>
                <div v-if="historyOptionUsr == 'Edit'">
                     <h3>USUARIOS </h3>  <p>Editar usuario</p>
                </div>
               
            </div>
             <div v-else-if="historyOption == 'Default'">
                <div v-if="historyOptionUsr == 'Default'">
                     <h3>USUARIOS </h3>  <p>Accesos permitidos al administrador</p>
                </div>
                <div v-if="historyOptionUsr == 'Add'">
                     <h3>USUARIOS</h3>  <p>Agregar nuevo usuario</p>
                </div>
                <div v-if="historyOptionUsr == 'Edit'">
                     <h3>USUARIOS </h3>  <p>Editar usuario</p>
                </div>
               
            </div>
            <div  v-else-if="historyOption == 'Restaurantes'">
                <div v-if="historyOptionRes == 'Default'">
                     <h3>RESTAURANTES </h3>  <p>Lista disponibles</p>
                </div>
                <div v-if="historyOptionRes == 'Add'">
                     <h3>RESTAURANTES </h3>  <p>Agregar nuevo </p>
                </div>
                <div v-if="historyOptionRes == 'Edit'">
                     <h3>RESTAURANTES </h3>  <p>Editar</p>
                </div>
            </div>
           
             <div  v-else-if="historyOption == 'Categorias'">
                <div v-if="historyOptionCat == 'Default'">
                     <h3>CATEGORÍAS </h3>  <p>Lista disponibles</p>
                </div>
                <div v-if="historyOptionCat == 'Add'">
                     <h3>CATEGORÍAS </h3>  <p>Agregar nueva </p>
                </div>
                <div v-if="historyOptionCat == 'Edit'">
                     <h3>CATEGORÍAS </h3>  <p>Editar</p>
                </div>
            </div>
            <div v-else>
                <h3>{{historyOption}}</h3>
                <p>Opción aun no disponible.</p>
            </div>
            
             </div>
             <div class="user-dv dflx">
                 <div >
                     <h4>{{identity.name | splitUp }} {{identity.lastname | splitUp}}</h4>
                     <button @click="cerrarSesion()">Cerrar Sesión</button>
                 </div>
                 <div v-if="statusicon=='success'" class="icon-user">
                     <img :src="this.srcImg(icon)" alt="icono usuario">
                 </div>
                 <div v-else class="icon-user">
                     <img :src="icondefault" alt="icono usuario">
                 </div>
               

                

                

                
              

             </div>
        </div>
       
        <hr class="hrhd">

       

        <div v-if="viewModal" class="modal_view">
           
            <div id="modal_logout">
                <div class="body">
                     <img src="../assets/logout.png" alt="icono alerta">
            <h3 > <span>Cerrar Sesión</span></h3>
                </div>
           
            <div class="modal_log_btns dflx">
                <p @click="logout()">Aceptar</p>   <p @click="cancelar()">Cancelar</p>
            </div>
          </div>
        </div>
</div>
       
       
    
</template>
<script>

let urlpath = require('../global/url')
import {mapActions} from 'vuex';
import icondefault from '../assets/icon-user.png'
export default {
  name: 'HeaderSec',
   data(){
       return{
         message:'',
         status:'',
         viewModal:false,
         urlpath:urlpath,
         icondefault: icondefault,
         statusimg:'success'
       }
   },
    async created(){
    await this.getIdentity()

    let payload={
            id:this.identity.sub,
            option: "user",
        }
          this.getImage(payload);
     
},
    computed:{
        historyOption(){
            return this.$store.getters["main/getHistoryOption"]
        },
         icon(){
            return this.$store.getters["main/img"]
        },
          statusicon(){
            return this.$store.getters["main/statusimg"]
        },
         historyOptionUsr(){
            return this.$store.getters["usuarios/getHistoryOption"]
        },
          historyOptionRes(){
            return this.$store.getters["restaurantes/getHistoryOption"]
        },
           historyOptionCat(){
            return this.$store.getters["categorias/getHistoryOption"]
        },
         identity() {
      return this.$store.getters['admin/getIdentity'];
    },
    },
    methods:{
         ...mapActions('main', ['getImage']),
        wait: function () {
        setTimeout(() => this.$router.go(), 200);
        },

         getIdentity: async function (){
          let response =  await this.$store.dispatch("admin/getData");
          return response
      },
    
        cerrarSesion(){
           this.viewModal = true;
        },
        cancelar(){
            this.viewModal = false;
        },
        logout: async function(){
            let response =  await this.$store.dispatch("admin/logout");
           this.wait()
        },

        srcImg:   function (img){
                let src = `${urlpath.url()}/8w0_ZA6/x7X-1uy/user-img/${img}`
                
                this.status_img(img)
                 
                return src
        },

         status_img:async  function (img){
                 let payload ={
                    option:'user',
                    image:img
                }
                let response  =''

                try{
                     response =  await this.$store.dispatch("main/getStatusImage", payload);
                    if(response.data.status=='error'){
                        this.statusimg='error'
                    }else{
                        this.statusimg='success'
                    }
                }catch(err){
                    this.statusimg='error'
                }

               
               
    },

    },
     filters:{
     split: (value) => {
            if (!value) return '';
            value = value.toString();

          
            return  value.charAt(0).toUpperCase() 
          

        },
        splitUp: (value) => {
            if (!value) return '';
            value = value.toString();

            let splitStr = value.toLowerCase().split(' ');
           

           
             return  splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);     

        },
        splitName: (value) => {
            
            if (!value) return '';
            value = value.toString();
            

            let splitStr = value.toLowerCase().split(' ');
            let len = splitStr.length
            
            if(len == 1){
              return  splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);     
            }

            return  splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1) + ' ' + splitStr[1].charAt(0).toUpperCase() + splitStr[1].substring(1);  ;  

          

        },

        
 }
}
</script>

<style scoped>



    #HeaderSec{
        margin-top: 5.46875VW;
    }

    hr.hrhd{
        width: 70.72916666666667VW;
        margin-left: 0px;
        border-bottom: .2px solid #B1B1B1;
       margin-top: 1.6145833333333335VW;
       margin-bottom: 2.9166666666666665VW;
    }

.titles{
    width: 39.375VW;
}
    .titles h3{
        color: var(--color-4);
        font-weight: 600;
        font-size: 1.3020833333333335VW;
        margin: 0vw;
    }.titles p{
        color: var(--color-4);
        margin: 0px;
        font-size: 0.8333333333333334VW;
    }

    .user-dv{
        margin-left: 10vw;
    }

    .user-dv h4{
        color: var(--color-2);
        margin: 0vw;
        font-size: 0.9375VW;
        margin-top: .5vw;
            text-align: right;
    }
     .user-dv button{
        color: var(--color-1);
        text-decoration: underline;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.7291666666666666VW;
        margin-left: 3.2vw;
        padding: 0vw;
    }
    .icon-user{
        margin-left: 0.8854166666666666VW;
        width: 3.6458333333333335VW;
        height: 3.6458333333333335VW;
   overflow: hidden;
        border-radius: 2vw;
    }.icon-user img{
         width: 3.6458333333333335VW;
        height: 3.6458333333333335VW;
    }





</style>