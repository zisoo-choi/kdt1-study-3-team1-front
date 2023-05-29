<template lang="">
    <div>
        <h2> 상품 게시판 </h2>
        <div style="text-align: left; margin: 15px;" v-if="isBusiness">
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
            isBusiness: false
        }
    },
    computed: {
        ...mapState(productModule, ['products'])
    },
    mounted () {
        this.requestProductListToSpring()
        if (localStorage.getItem("loginUserRoleType") == "BUSINESS") {
            this.isBusiness = true;
            } else {
            this.isBusiness = false;
            }
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