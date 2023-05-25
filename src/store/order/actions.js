import axiosInst from '@/utility/axiosInst'

export default {

    requestOrderToSpring ({}, payload) {
        const { productName, productPrice, token } = payload
        return axiosInst.post('/shopping/order', { productName, productPrice, token})
        .then((res) => {
            alert('상품 구매 성공!')
            return res
        })
        .catch(() => {
            alert('구매 실패')
        })
    }

}