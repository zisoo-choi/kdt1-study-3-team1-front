import Vue from 'vue'
import Vuex from 'vuex'

import productModule from './product/ProductModule'
import AccountModule from './account/AccountModule'
import OrderModule from './order/OderModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productModule: productModule,
    accountModule: AccountModule,
    orderModule: OrderModule,
  },
})

export default store