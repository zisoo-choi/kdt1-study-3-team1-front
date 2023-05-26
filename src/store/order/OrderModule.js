import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/order/actions"
import state from "@/store/order/state"
import mutations from './mutations'

Vue.use(Vuex)

const OrderModule = {
    namespaced: true,
    actions,
    state,
    mutations
}

export default OrderModule