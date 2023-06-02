<template lang="">
    <div align="center">
        <h2>상품 정보</h2>
        <ProductReadForm v-if="product" :product="product"/>
        <p v-else>로딩중 .......</p>
        <div>
            <router-link :to="{ name: 'ProductModifyPage', params: { productId } }">
                <v-btn color="blue lighten-3">수정하기</v-btn> 
            </router-link>
            <v-btn color="blue lighten-2" @click="onDelete">삭제하기</v-btn>
            <router-link :to="{ name: 'ProductListPage' }"> 
            <v-btn color="blue lighten-1">돌아가기</v-btn> 
            </router-link>

            <v-btn>
                <router-link :to="{
                    name: 'OrderConfirmationPage',
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
    props: {
        productId: {
            type: Number,
            required: true,
        },
    },
    // computed: {
    //     ...mapState(productModule, ['product']),
    // },
    data() {
        return{
            product: {},  
        }
    },
    components: {
        ProductReadForm
    },
    methods: {
        ...mapActions( productModule, ['requestProductToSpring', 'requestDeleteProductToSpring']),

        onDelete() {
            
            this.requestDeleteProductToSpring(this.productId)
        },
        
    },
    async created() {
        this.product = await this.requestProductToSpring(this.productId)
        console.log("아이디" + this.productId)
        console.log("이름:" + JSON.stringify(this.product))
    },

}
</script>
<style scoped>
    
</style>