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
              <h1>LOGIN</h1>
              <form  @submit.prevent="
                  login(
                    email,
                    password
                  )
                ">
                <input v-model="email" type="email" name="email" id="email"  :placeholder="'Correo electrónico'" required>
                <input v-model="password" type="password" name="pass" id="pass" minlength="8" :placeholder="'Contraseña'" required>

                <button  variant="outline-secondary" type="submit">INICIAR SESIÓN</button>


                <div  class="message_error" v-if="status=='error'">
                    <p>
                      {{this.message}}
                    </p>
                    <img src="../assets/alert.png">
                </div>
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
  name: 'Login',
  data() {
    return {
      status:'',
      message:'',
      email:'',
      password:''

    };
  },
  computed:{
  
    identity() {
      return this.$store.getters['admin/getIdentity'];
    }
  },

  methods:{
      wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
     delStatus: function () {
      setTimeout(() => this.delMsgs()
      ,1500);
    },
    delMsgs: function(){
       this.status=""
       this.message=""
    },
     async login(email, password) {
       this.status =''
       this.message =''

        let result = await this.$store.dispatch("admin/login",  {email, password});
      
         if(result.status=='success'){

          let response = await this.$store.dispatch("admin/getData");

     
              
          if(response.status =='success'){

            if(response.result.role =='legrafica' || response.result.role =='admin'){
                let isAdmin =  userService.isAdmin(response.result)
        

                if(isAdmin.admin == true){ // para el administrador
                        this.$router.push("/auth").catch(err => {});
                }else{ 
                      this.wait()  
                }


              }else{
                 this.$router.push("/home").catch(err => {});
              }

                

          }else{
             this.status='error'
              this.message = response.message
              this.delStatus()
              this.wait()
          } 
        
         
        

         

        }else{
          this.status='error'
          this.message = result.message
          this.delStatus()
        }
        
     }
  }
}
</script>
<style scoped>

  .message_error {
    display: flex;
  }
  .message_error p{
    margin-bottom: 0vw !important;
    background:var(--color-7);
    border: 0vw;
    width: 69.04871794871795VW;
    padding: 2.5vw 0vw;
    color: var(--color-5);
    font-weight: 400;
    text-align: center;
    font-size: 3.3333333333333335VW;
    font-style: normal;
    font-family: var(--Poppins);
    margin-top: 3.8229166666666667VW ;
    border-radius: 10vw;
    transition: all 300ms;
  }
  .message_error img {
    width: 5vw;
    height: auto;
    margin-left: -8vw;
    margin-top: 3.8vw;
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
     font-family: var(--Poppins);
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

    .form_login h1{
      height: 4vw;
      color: var(--color-2);
      font-weight: 500;
      font-size: 8.974358974358974VW;
      line-height: 2.2916666666666665VW;
      text-align: center;
      margin-bottom: 5.641025641025641VW !important;
      font-family: var(--Lato);
    }

   .form_login form{
     display: inline-grid;
   }

   

   .form_login  input{
     border-radius: 10vw;
     border: 0.052083333333333336VW solid var(--color-2);
     width: 58.04871794871795VW;
     height: 12.86923076923077VW; 
     font-size: 3.3333333333333335VW;
     color: var(--color-4) !important;
     margin-bottom: 4.817948717948718VW !important;
    padding: 0vw 6vw;
      font-family: var(--Lato);
   }

   

   .form_login input:first-child{
     margin-bottom: 1.0416666666666665VW;
   }

  .form_login ::placeholder{
    color: var(--color-2) !important;
    font-size: 3.3333333333333335VW;
    font-weight: 600;
  }

   .form_login button{
     background: var(--color-1);
     border: 0vw;
     height: 12.86923076923077VW;
     color: var(--color-5);
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


.B2 {
  width: 100%;
  height: 88.46153846153845VW;
  display: block;
  background: var(--color2);
  margin-top: 33.230769230769234VW;
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

  .message_error {
    display: flex;
  }
  .message_error p{
    margin-bottom: 0vw !important;
    background:var(--color-7);
    border: 0vw;
    width: 19.46875VW;
    padding: 0.5vw 0vw;
    color: var(--color-5);
    font-weight: 400;
    text-align: center;
    font-size: 0.6333333333333334VW;
    font-style: normal;
    font-family: var(--Poppins);
    margin-top:1.8229166666666667VW ;
    transition: all 300ms;
  }
  .message_error img {
    width: 1vw;
    height: auto;
    margin-left: -2vw;
    margin-top: 1.8vw;
  }

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
  .form_login h1 {
    height: 4vw;
    color: var(--color-2);
    font-weight: 500;
    font-size: 1.8229166666666667VW;
    line-height: 2.2916666666666665VW;
    text-align: center;
    margin-bottom: 1VW !important;
  }
  .form_login input {
    border-radius: 10vw;
    border: 0.052083333333333336VW solid var(--color-2);
    width: 18.46875VW;
    height: 2.7083333333333335VW;
    font-size: 0.6770833333333334VW;
    color: var(--color-4) !important;
    margin-bottom: 1.875VW !important;
    padding: 0vw 1vw;
  }
  .form_login input:first-child{
    margin-bottom: 1.0416666666666665VW !important;
  }
  .form_login ::placeholder{
    color: var(--color-2) !important;
    font-size: 0.6770833333333334VW;
    font-weight: 600;
 }
 .form_login button {
 background: var(--color-1);
    border: 0vw;
    width: 15.989583333333332VW;
    height: 3.125VW;
    color: var(--color-5);
    font-weight: 400;
    text-align: center;
    font-size: 0.7291666666666666VW;
    font-style: normal;
      font-family: var(--Lato);
    line-height: 1.0473958333333333VW;
    cursor: pointer;
    border-radius: 10vw;
    letter-spacing: 0.1vw;
  }



.B2 {
  display: none !important;
}

}


</style>
