<template lang="">
    <div>
        <!-- 
            1. 상품 목록 페이지에서 확인할 수 있는 상품의 속성으로는 상품 번호, 상품 명, 상품 가격이 존재합니다.
            2. 상품 목록에 대한 정보를 backend에서 받지 못한다면 “ 로딩 중입니다. “ 라는 메시지를 출력하게 합니다.
            3. 상품 목록에 존재하는 상품 명을 누르면 해당 상품의 세부 사항을 확인할 수 있는 페이지로 이동합니다.
            4. 사용자가 사업자인 경우 상품 등록 버튼을 활성화합니다.
            5. 상품 등록 버튼을 누르면 상품을 등록할 수 있는 페이지로 이동합니다.
        -->
        <h2>상품 목록</h2>
        <table style="margin: 10px">
        <tr>
            <th align="center" width="10%">상품 번호</th>
            <th align="center" width="50%">상품 명</th>
            <th align="center" width="40%">상품 가격</th>
        </tr>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
            <td colspan="3">
                로딩 중입니다.
            </td>
        </tr>
        <tr v-else v-for="product in products" :key="product.productId">
            <td align="center">
                {{ product.productId }}
            </td>
            <td align="center">
                <router-link :to="({
                    name: 'ProductReadPage',
                    params: { productId: product.productId}})">
                        {{ product.productName }}    
                </router-link>
            </td>
            <td align="center">
                {{ product.productPrice }}
            </td>
        </tr>
    </table>
    </div>
</template>
<script>
export default {
    props: {
        products: {
            type: Array
        }
    },
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