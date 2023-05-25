<template lang="">
    <form>
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
        <v-btn @click="onSubmit">구매</v-btn> 
        <button>
            <router-link :to="{ name: 'home' }">
                돌아가기
            </router-link>            
        </button>
    </form>
</template>

<script>


export default {
    data () {
        return {
            userToken: localStorage.getItem('loginUserToken')
        }
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        onSubmit () {
            const { productName, productPrice, userToken } = this
            this.$emit('submit', { productName, productPrice, userToken })
        }
    }
}
</script>
<style lang="">
    
</style>