<template lang="">
    <div align="center">
        <h2> 상품 게시판 </h2>
        <div style="text-align: left; margin: 15px;">
            <router-link :to="{ name: 'ProductRegisterPage' }">
                    상품 등록
            </router-link>
        </div>
        <product-list-form :products="products"/>
    </div>
</template>
<script>
import{ mapActions, mapState } from 'vuex';
import ProductListForm from '@/components/product/ProductListForm.vue';

const productModule = 'productModule'

export default {
    components: { ProductListForm },
    data () {
        return {
            products: [],
        }
    },
    async mounted () {
        this.products = await this.requestProductListToSpring()
        console.log(this.products)
    },
    methods: {
        ...mapActions(
            productModule, ['requestProductListToSpring']
        )
    },
    // computed: {
    //     ...mapState(productModule, ['products'])
    // },

}
</script>
<style lang="">
    
</style>