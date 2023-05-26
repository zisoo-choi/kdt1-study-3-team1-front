import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestProductToSpring ({ commit }, productId) {
        return axiosInst.get(`/product/${productId}`)
        .then((res) => {
            commit(REQUEST_PRODUCT_TO_SPRING, res.data)
        })
    },
    requestProductListToSpring({commit}) {
        axiosInst.get('/product/list')
        .then((res) => {
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
        })
    },
    requestRegisterProductToSpring ({}, payload) {

        const { productName, productPrice, token } = payload

        return axiosInst.post('/product/product-register', { productName, productPrice, accountId})
        .then((res) => {
            alert('상품 등록 성공!')
            return res
        })
        .catch(() => {
            alert('등록 실패')
        })
    },
    requestDeleteProductToSpring ({}, productId) {
        return axiosInst.delete(`/product/${productId}`)
            .then((res) => {
                if (res.data = true){
                    alert('삭제 성공!')
                }             
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
}