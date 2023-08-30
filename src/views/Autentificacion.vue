<template>
  <div id="Login">
    <div class="content_login">
     
      <div class="B0">
        <img src="">
      </div>

      <div class="B1">

        <div class="fondo-logo">
          <img src="../assets/logo_2.png" alt="Logo sitio web">
        </div>

        <div class="B1F2">
            <div class="form_login">
              <p class="B1Text">Ingresa el código que fue enviado a tu correo electrónico</p>
              <form id="logincodeapp"  > 
                  <input 
                      id="code" 
                      v-model="code_form" 
                      type="text" 
                      name="code" 
                      required
                      placeholder="Código"
                  >
                  <input class="Vbuton" type="button"  @click="verify()" value="Verificar">
                  <p class="form-reenviar-codigo" >¿Problemas? <span @click="sendCode()"> Solicita un nuevo código aquí</span> </p>
                  
                  <p v-if="status=='error'" class="error-code">{{message}}</p>
              </form>
            </div>
        </div>
       
      </div>

      <div class="B2">
         <img src="">
      </div>

    </div>
  </div>
</template>
<script>


import userService from '../services/user.service'

export default {
  name: 'autentificacion',
  data: () => ({
    code_form: "",
    status:'',
    message:''
  }),
  created(){
 this.getIdentity()
  },
  computed:{
    identity() {
      return this.$store.getters['admin/getIdentity'];
    },
  },
  methods: {
      getIdentity: async function (){
          let response =  await this.$store.dispatch("admin/getData");
          return response
      },

      delMsg(){
        this.status='' 
        this.message=''
      },
       refresh: function () {
        setTimeout(() => this.delMsg(), 1500);
        },


    async  verify(){
        this.getIdentity()
        let identity= this.identity
      
   
          let code = String(identity.code)
          let id = String(identity.sub)

             let data ={
                "id":code,
                "id_user":id,
                "type":identity.role,
                "code":this.code_form
               
              }

                  

            let result = await this.$store.dispatch("main/addItem",  {option:'session', item:data});
                   
                  



          if(result.status == 'success'){
             let ath = await userService.createAuth();

             if(ath.status=='success'){
                 userService.setAth(ath.result);
                    
               this.$router.push("/administrador").catch(err => {});
             }else{
               this.status ='error'
               this.message='Ha ocurrido un error.'
                  this.refresh()
             }
             
            
       
             
          }else{
            this.status='error' 
            this.message='El codigo no coincide.'
             this.refresh()
          }
      },
      
     

     
      async sendCode() {
        
         this.getIdentity()
        let identity= this.identity
      try {
        

        await this.$store.dispatch("admin/resendCode", {
            email: identity.email,
            name: identity.name,
            code: identity.code
        });
        //console.log(identity.code);

         if(result.data.status !='success'){
             localStorage.removeItem('tkn')
             this.$router.push("/login").catch(err => {});
         }
       
      } catch (error) {
        this.status ='error'
      }
    }
  }
}
</script>


<style scoped>


  .message_error p{
     margin-bottom: 0vw !important;
     background:var(--color-7);
     border: 0vw;
     width: 19.46875VW;
     padding: .5vw;
     color: var(--color-5);
     font-weight: 400;
     text-align: center;
     font-size: 0.6333333333333334VW;
     font-style: normal;
      font-family: var(--Lato);
     margin-top:1.8229166666666667VW ;
     transition: all 300ms;

  }


.content_login {
    display: block;
}
.B1 {
  width: 100%;
  text-align: -webkit-center;
  margin-top: 12.564102564102564VW;
}
   #Login{
    
     background: white;
     background-repeat: no-repeat;
     background-size: 101%;
      font-family: var(--Lato);
   }

    .fondo-logo{
    background: white;
    }
      .fondo-logo img{
        width: 48.97435897435897VW;
        height: auto;
      }

   
.B1F2 {
  
}
   

   .logos_{
     display: flex;
   }

    .B1Text {
      width: 68vw;
      height: 8vw;
      color: var(--color-2);
      font-weight: 500;
      font-size: 3.5897435897435894VW;
      font-family: var(--Lato);
      line-height:4.307692307692308VW;
      text-align: center;
      margin-bottom: 5.641025641025641VW !important;
      text-transform: uppercase;
    }

   .form_login form{
     display: inline-grid;
    justify-items: center;
   }

   

   .form_login  input{
     border-radius: 10vw;
     border: 0.052083333333333336VW solid var(--color-2);
     width: 58.04871794871795VW;
     height: 12.86923076923077VW; 
     font-size: 3.3333333333333335VW;
      font-family: var(--Lato);
     color: var(--color-4);
     margin-bottom: 4.817948717948718VW !important;
    padding: 0vw 6vw;
   }

   

   .form_login input:first-child{
     margin-bottom: 1.0416666666666665VW;
   }

  .form_login ::placeholder{
    color: var(--color-2) !important;
    font-size: 3.3333333333333335VW;
    font-weight: 600;
  }

  .Vbuton {
    background: var(--color-1);
    border: 0vw !important;
    width: 70.048718VW !important;
    height: 12.86923076923077VW;
    color: var(--color-5) !important;
    font-weight: 400;
    text-align: center;
    font-size: 3.3333333333333335VW;
    font-style: normal;
      font-family: var(--Lato);
    line-height: 1.0473958333333333VW;
    cursor: pointer;
    border-radius: 10vw;
    letter-spacing: 0.3vw;
  }
  .form-reenviar-codigo {
    display: none;
  }


.B2 {
  width: 100%;
  height: 88.46153846153845VW;
  display: block;
  background: var(--color2);
  margin-top: 32.48717948717949VW;
}
.B2 img {
  width: 92.82051282051282VW;
  height: auto;
  float: right;
    margin-top: -12.5vw;
    z-index: 3;
}

.B0 {
  display: none;
}

@media (min-width: 768px) {

.B0 {
  display: block !important;
  width: 56.041666666666664VW;
  height: 56.25vw;
  display: block;
  background: var(--color-2);
}
  .B0 img {
    width: 41.822916666666664VW;
    height: auto;
    margin-top: 6.8vw;
    margin-left: 19.2vw;
    z-index: 3;
  }

.B1 {
    width: 100%;
    text-align: -webkit-center;
    margin-top: 0VW !important;
}
.content_login {
  display: flex !important;
}
  .fondo-logo img {
    width: 14.21875VW;
    height: auto;
    margin-top: 13.90625VW;
    margin-bottom: 4.635416666666667VW;
  }
  .form_login form {
    display: inline-grid;
    justify-items: center;
  }
  .B1Text {
    width: 18vw;
    height: 2vw;
    color: var(--color-2);
    font-weight: 500;
    font-size: 0.9375VW;
    line-height: 1.1250000000000002VW;
    text-align: center;
    margin-bottom: 1.6145833333333335VW !important;
  }
  .form_login input {
    border-radius: 10vw;
    border: 0.052083333333333336VW solid var(--color-2);
    width: 18.46875VW;
    height: 2.7083333333333335VW;
    font-size: 0.6770833333333334VW;
    color: var(--color-4);
    margin-bottom: 1.875VW !important;
    padding: 0vw 1vw;
  }
  .form_login input:first-child{
    margin-bottom: 1.6145833333333335VW !important;
  }
  .form_login ::placeholder{
    color: var(--color-2) !important;
    font-size: 0.6770833333333334VW;
    font-weight: 600;
 }
 .Vbuton {
    background: var(--color-2);
    border: 0vw !important;
    width: 15.989583333333332VW !important;
    height: 3.125VW !important;
    color: var(--color-5) !important;
    font-weight: 400;
    text-align: center;
    font-size: 0.7291666666666666VW !important;
    font-style: normal;
      font-family: var(--Lato);
    line-height: 1.0473958333333333VW;
    cursor: pointer;
    border-radius: 10vw;
    letter-spacing: 0.1vw;
  }
  .form-reenviar-codigo {
    display: block;
    color: var(--color-3);
    font-size: 0.6770833333333334VW;
    font-weight: 600;
  }
  .form-reenviar-codigo span {
    text-decoration-line: underline;    
    cursor: pointer;
  }



.B2 {
  display: none !important;
}

  
}

</style>
