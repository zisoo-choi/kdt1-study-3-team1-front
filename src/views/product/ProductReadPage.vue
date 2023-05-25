<template lang="">
    <div align="center">
        <h2>상품 정보</h2>
        <ProductReadForm v-if="product" :product="product"/>
        <p v-else>로딩중 .......</p>
        <div>
            <router-link :to="{ name: 'ProductModifyPage', params: { productId } }">
            <v-btn color="blue lighten-3">수정하기</v-btn> 
            </router-link>
            <v-btn color="blue lighten-2">삭제하기</v-btn>
            <router-link :to="{ name: 'home' }"> 
            <v-btn color="blue lighten-1">돌아가기</v-btn> 
            </router-link>

            <v-btn v-if="isBusiness">
                <router-link :to="{
                    name: 'OrderConfirmaitionPage',
                    params: { productId }
                }">구매하기</router-link>
            </v-btn>

        </div>
    </div>
</template>

<script>
import ProductReadForm from '@/components/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'


export default {
    data() {
        return{
            roleType: localStorage.getItem('roleType')
        }
    },
    components: {
        ProductReadForm
    },
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions( productModule, ['requestProductToSpring']),
    },
    computed: {
        ...mapState(productModule, ['product'])
    },
    mounted() {
        this.requestProductToSpring(this.productId)
        if (localStorage.getItem("roleType") == BUSINESS) {
            this.isBusiness = false;
            } else {
            this.isBusiness = true;
            }
    }
}
</script>
<style scoped>
    
</style>