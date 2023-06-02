<template lang="">
    <div>
        <h2>구매하시겠습니까?</h2>
        <order-confirmation-form v-if="product" :product="product" @submit="onSubmit"/>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import OrderConfirmationForm from '@/components/order/OrderConfirmationForm.vue';

const productModule = 'productModule'
const orderModule = 'orderModule'

export default {
    data () {
        return {
            product: {}
        }
    },
    components: {
        OrderConfirmationForm,
    },
    props: {
        productId: {
            type: Number,
            required: true,
        }
    },
    methods: {
        ...mapActions( productModule, ['requestProductToSpring']),
        ...mapActions( orderModule, ['requestOrderToSpring']),

        async onSubmit (payload) {
            await this.requestOrderToSpring(payload)
            await this.$router.push({name:'ProductListPage'})
        },   
    },

    // computed: {
    //     ...mapState(productModule, ['product'])
    // },    

    async mounted() {
        this.product = await this.requestProductToSpring(this.productId)
        
    }
}
</script>
<style lang="">
    
</style>