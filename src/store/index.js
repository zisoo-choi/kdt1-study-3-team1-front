import Vue from 'vue'
import Vuex from 'vuex'

import productModule from './product/ProductModule'
import AccountModule from './account/AccountModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productModule: productModule,
    accountModule: AccountModule,
  },
})

export default store