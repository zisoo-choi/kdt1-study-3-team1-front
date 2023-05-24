import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

export default {
    [REQUEST_PRODUCT_LIST_TO_SPRING] (state, recievedData) {
        state.products = recievedData
    },
    [REQUEST_PRODUCT_TO_SPRING] (state, recievedData) {
        state.product = recievedData
    }
}