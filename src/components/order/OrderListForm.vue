<template lang="">
    <div>
        <table>
            <tr>
                <th align="center" width="5%">주문 번호</th>
                <th align="center" width="25%">상품 명</th>
                <th align="center" width="30%">상품 가격</th>
                <th align="center" width="40%">주문 일자</th>
            </tr>
             <tr v-if="!orders || (Array.isArray(orders) && orders.length === 0)">
                <td colspan="4">
                    주문한 상품이 없습니다
                </td>
             </tr>
             <tr v-else v-for="order in orders" :key="order.orderId">
                <td align="center">
                    {{ order.orderId }}
                </td>
                <td align="center">
                    <router-link :to="({
                        name: 'ProductReadPage',
                        params: { productId: order.productId }})">
                    {{ order.productName }}
                    </router-link>
                </td>
                <td align="center">
                    {{ order.productPrice }}
                </td>
                <td align="center">
                    {{ order.orderDate }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        orders: {
            type: Array
        }
    }
}
</script>
<style scoped>
    table{
    width: 75%;
    text-align : left;
    }
    table th{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
    }
    table td{
        padding : 12px;
    }
    table tr:nth-of-type(even){
        background-color: rgba(0,0,255,0.1);
    }
</style>