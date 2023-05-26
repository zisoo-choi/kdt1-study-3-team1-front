<template lang="">
    <div align="center">
       <h2>주문 목록</h2>
       <OrderListForm :orders="orders"/> 
    </div>
</template>
<script>
import OrderListForm from "@/components/order/OrderListForm.vue"
import { mapActions, mapState } from "vuex";

const orderModule = "orderModule"

export default {
    data () {
        return {
            accountId: localStorage.getItem('loginUserInfo'),
        // 테스트 용
        //     orders: [ 
        //         {orderId: 1, product:{productId: 1, productName: "바닐라", productPrice: 2000}, orderDate: "11.11"},
        //         {orderId: 2, product:{productId: 8, productName: "초코", productPrice: 2500}, orderDate: "11.24"},
        //         {orderId: 4, product:{productId: 4, productName: "딸기", productPrice: 2300}, orderDate: "12.08"},
        //         {orderId: 5, product:{productId: 3, productName: "체리", productPrice: 3200}, orderDate: "12.21"},
        //         {orderId: 6, product:{productId: 9, productName: "쿠키", productPrice: 4500}, orderDate: "01.05"},
        //         {orderId: 7, product:{productId: 11, productName: "슈팅스타", productPrice: 5000}, orderDate: "02.17"},
        // ]
        }
    },
    components: {
        OrderListForm,
    },
    computed: {
        ...mapState(orderModule, ['orders'])
    },
    methods: {
        ...mapActions(orderModule, ['requestOrderListToSpring'])
    },
    mounted() {
        this.requestOrderListToSpring(this.accountId)
    }
}
</script>
<style scoped>
    div {
      margin: 30px 30px;
      justify-content: center;
      align-items: center;
    }
</style>