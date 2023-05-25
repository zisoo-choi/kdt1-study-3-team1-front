<template>
    <div>
        <div> 
           <b>상품 번호</b>
            {{ product.productId }}
        </div>
        <div> 
           <b>상품 명</b>
            {{ product.productName }}
        </div>
        <div> 
           <b>상품 가격</b>
            {{ product.productPrice }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
    
    
</style>