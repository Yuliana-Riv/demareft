import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios";
import userService from '../services/user.service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/administrador',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta :{
      log:true,
      admin : true,
      auth: true, 
    }
  },

  {
    path: '/auth',
    name: 'autentificacion',
    component: () => import('../views/Autentificacion'),
    meta :{
      log:true,
      admin : true,
      auth: false
    }
  },
 
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    beforeEnter: async (to, from, next) => { 
      let tokenexp = await userService.tokenexp()

      if(tokenexp){
        localStorage.clear(); //limpiar el localstorage
        next()
      }
     
      next();  
    },
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },
 
  /*{
    path: '/',
    name: 'home',
    component: () => import('../views/Proximamente'),
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },*/
 
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },

  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404'),
    meta :{
     log:false,
     admin : false,
     auth: false
    }
  },



  {
    path: '/proximamente',
    name: 'Proximamente',
    component: () => import('../views/Proximamente'),
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach( async (to, from, next) => {

  let meta_admin = to.matched.some(record=>record.meta.admin);
  let meta_log = to.matched.some(record=>record.meta.log);
  let meta_auth = to.matched.some(record=>record.meta.auth);

  let tokenexp = await userService.tokenexp()
  let check =false //comprobar si esta logeado
  let admin =false;
  let type =''


  if(tokenexp){ // ver que el token no este expirado.
    localStorage.clear(); //limpiar el localstorage
    next()
  }


  let response = await userService.getData()

  if(response.status =='error'){
    localStorage.clear()
  }


  if(response.status=='success'){ //comprobar que sea un login valido.
    check =true;
    let isAdmin = userService.isAdmin(response.result);
    admin = isAdmin.admin
    type = isAdmin.type
  
  }

  let ath = await userService.getAth();

 
  // borrar el localstorage cada que vayamos a login.
  
  if(to.path==='/login' && check){
    localStorage.clear()
    next()
  }

 
  if(meta_log){
    if(check){
      if(meta_admin){
            if(admin){
            
              if(meta_auth){
                if(ath){
                  next();
                }else{
                  localStorage.clear()
                  next('/login')
                }
              }else{ //...proximamente rutas que no requieran autentificacion
                next()
              }
             
            }else{
              localStorage.clear()
              next('/')
            }
     }else{
        if(admin){ //no requiere admin pero es admin
          next()
         }else{
           next()
         }
      }
    }else{
      next('/login')
    }
    

  }else{
   
    if(check){
      if(admin){
       next()
      }else{
        next();
      }
    }else{
      next();
    }

  }

 
});










export default router

