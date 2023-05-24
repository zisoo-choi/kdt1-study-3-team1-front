import Vue from "vue"
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"
import states from "./states"

Vue.use(Vuex)

const ProductModule = {
    namespaced: true,
    states,
    actions,
    mutations
}

export default ProductModule