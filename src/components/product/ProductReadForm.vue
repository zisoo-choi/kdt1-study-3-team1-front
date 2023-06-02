<template>
    <div align="center">
        <table>
            <tr>
                <td>상품 번호</td>
                <td>
                    <input type="text" :value="product.productId" readonly />
                </td>
            </tr>
            <tr>
                <td>상품 명</td>
                <td>
                    <input type="text" :value="product.productName" readonly />
                </td>
            </tr>
            <tr>
                <td>상품 가격</td>
                <td>
                    <input type="text" :value="product.productPrice" readonly />
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // 테스트용
            // product: {productId: 1, productName: "아이스크림", productPrice: 1000}
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    table{
    width: 75%;
    text-align : center;
    }
    table tr{
        padding : 12px;
        background-color: aliceblue;
           
    }
    table td{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
        border-left: 2px solid  darkgray;
    }
    
</style>