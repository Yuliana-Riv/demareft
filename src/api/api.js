import axios from "axios";

    
const cPost = 'lRj_4Xb/qMN-l6n'
const cGet = '8w0_ZA6/x7X-1uy'
const cPut = 't5M_EOE/YT3-QmH'
const cDel = 'UsP_3xK/Cvz-0E6'

export default {

  resendCode(user, headers){
    return axios.post(`/${cPost}/reenviar-codigo`, user, headers);
  },

  login(user, headers){
    return axios.post(`/${cPost}/login`, user, headers);
  },

  getInfoUser(data, headers){
    return axios.post(`/${cPost}/info_usr`, data, {headers});
  },



  getAllInfo(option, headers){
    return axios.get(`/${cGet}/${option}`, {headers});
  },

  getStatusImage(payload, headers){
    return axios.get(`/${cGet}/${payload.option}-img/${payload.image}`, {headers});
  },


  getInfoById(payload, headers){
    return axios.get(`/${cGet}/${payload.option}/${payload.id}`, {headers});
  },
 
  search(data, headers){
    return axios.get(`/${cGet}/buscar/${data.normalizedOpt}/${data.search}`, {headers});
  },

 
  //metodos de eliminar, editar y agregar
  deleteItem(payload,token){
    return axios.delete(`/${cDel}/${payload.option}/delete`, {
        data: {
          id:payload.id
        },
        headers: {
          Authorization: token 
        } 
      });
  },
  
  editItem(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.put(`/${cPut}/${payload.option}/update`, payload.item, {headers} );
  },

  editImage(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.put(`/${cPut}/${payload.option}/upload/image/${payload.id}`, payload.item, {headers} );
  },

  addItem(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.post(`/${cPost}/${payload.option}/create`, payload.item, {headers});
  },

  
  enviarMailContacto(data, headers){
    return axios.post('j43-wdrDE4s_wffs2/contacto', data, headers);
  },


  

};