import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/order/actions"

Vue.use(Vuex)

const OrderModule = {
    namespaced: true,
    actions,
}

export default OrderModule