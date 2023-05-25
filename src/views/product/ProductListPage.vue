<template lang="">
    <div>
        <h2> 상품 게시판 </h2>
        <div style="text-align: left; margine: 15px;" v-if="Business">
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
            Business: ' ', 
        }
    },
    computed: {
        ...mapState(productModule, ['products'])
    },
    mounted () {
        this.requestProductListToSpring()
    },
    methods: {
        ...mapActions(
            productModule, ['requestProductListToSpring']
        )
    }
}
</script>
<style lang="">
    
</style>