import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import main from './modules/main'
import usuarios from './modules/usuarios'
import suscripciones from './modules/suscripciones'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: admin,
    main:main,
    usuarios:usuarios,
    suscripciones:suscripciones,
  }
})
