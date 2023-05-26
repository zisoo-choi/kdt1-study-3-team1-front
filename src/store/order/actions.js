import axiosInst from '@/utility/axiosInst'
import { REQUEST_ORDER_LIST_TO_SPRING } from './mutation-types'

export default {

    requestOrderToSpring ({}, payload) {
        const { productId, accountId } = payload
        return axiosInst.post('/order/order', { productId, accountId})
        .then((res) => {
            alert('상품 구매 성공!')
        })
        .catch(() => {
            alert('구매 실패')
        })
    },

    requestOrderListToSpring ({commit}, payload) {
        const { accountId } = payload
        return axiosInst.get('/order/list', {accountId})
        .then((res) => {
            commit(REQUEST_ORDER_LIST_TO_SPRING, res.data)
        })
    }

}