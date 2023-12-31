import axios from "axios";
let urlpath = require('../global/url')
import dayjs from 'dayjs';

var userToken="";
export default {
  
  
  setToken(token) {
    localStorage.setItem("tkn", token);
  },

  getToken() {
    let token = localStorage.getItem("tkn");

    if (token && token != "undefined" && token != '') {
      userToken = token;
    } else {
      userToken = null;
    }

    return userToken;
  },


  isAdmin(user){
    let admin = false;
    let type = 'user'

    if(user == undefined || user == null || user == ''){
      return {"admin":admin, "type":type}
    }

    if(user.role == undefined || user.role == null || user.role ==''){
      return {"admin":admin, "type":type}
    }

    if(user.role != 'admin' && user.role != 'legrafica' ){
      return {"admin":admin, "type":type}
    }

    //si es admin.
    admin = true
    type = user.role

     return {"admin":admin, "type":type}


  },



  async tokenexp(){  
    let exp = false;


    
   let response = await this.getData()

   if(response.status =='error'){
     return true
   }
    
   let identity = response.result;

   let identity_exp = identity.exp; // fecha de expiración
   let date = dayjs().format(); // fecha actual
   date < identity_exp? exp : exp = true; 

   
    return exp;
  },


  

  async getData(){ 
 

    try {              
      

      let token = this.getToken()

      if(token==null){
          return {
              status:'error',
              message:'Sesión no valida',
              result:''
          }
      }


      let headers =  {'Authorization': token} ;
    
      let response = await axios.post('/lRj_4Xb/qMN-l6n/info_usr', {"data":token}, {headers});
    
      
      return response.data;

      } catch (error) {
          return {
            status:'error',
            message:'Error al intentar obtener la sesión.',
            result:''
        }
      }

} ,


async createAuth(){

       try{
        let token = this.getToken()

        if(token==null){
            return {
                status:'error',
                message:'Sesión no valida',
                result:''
            }
        }
        let headers =  {'Authorization': token} ;
      
        let response = await axios.post('/lRj_4Xb/qMN-l6n/create-auth', {"data":token}, {headers});
      
        
        return {
          status:'success',
          result:response.data.result
        };
       }catch (error) {
          return {
            status:'error',
            result:''
          }
       }
      
    },

    setAth(ath) {
    localStorage.setItem("ath", ath);
    }, 

    async   getAth() {
    let ath = localStorage.getItem("ath");

    let valid = false;

    if (ath  && ath  != "undefined") {
      try{
        let token = this.getToken()

        if(token==null){
            return {
                status:'error',
                message:'Sesión no valida',
                result:''
            }
        }
        let headers =  {'Authorization': token} ;
      
        let response = await axios.post('/lRj_4Xb/qMN-l6n/get-auth', {"token":ath }, {headers});
      
       response.data.status == 'success' ? valid=true :   valid= false

       
      }catch (error){
        valid= false;
      }


    } else {
      valid= false;
    }

       return valid;
    },




};

