import {
    REQUEST_ORDER_LIST_TO_SPRING,
} from './mutation-types'

export default {
    [REQUEST_ORDER_LIST_TO_SPRING] (state, recievedData) {
        state.orders = recievedData
    },
}