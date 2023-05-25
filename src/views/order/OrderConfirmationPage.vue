<template lang="">
    <div>
        <h2>구매하시겠습니까?</h2>
        <oder-confirmation-form v-if="product" :product="product" @submit="onSubmit"/>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import OrderConfirmationForm from '@/components/order/OrderConfirmationForm.vue';

const productModule = 'productModule'
const orderModule = 'orderModule'

export default {
    components: {
        OrderConfirmationForm,
    },

    methods: {
        ...mapActions( productModule, ['requestProductToSpring']),
        ...mapActions( orderModule, ['requestOrderToSpring']),

        methods: {
        async onSubmit (payload) {
            const product = await this.requestOrderToSpring(payload)
        }},   
    },

    computed: {
        ...mapState(productModule, ['product'])
    },    

    mounted() {
        this.requestProductToSpring(this.productId)
    }
}
</script>
<style lang="">
    
</style>