<template lang="">
    <div align="center">
        <table>
            <tr>
                <td>상품 번호</td>
                <td>
                    {{ product.productId }}
                </td>
            </tr>
            <tr>
                <td>상품 명</td>
                <td>
                    {{ product.productName }}
                </td>
            </tr>
            <tr>
                <td>상품 가격</td>
                <td>
                    {{ product.productPrice }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>


export default {
    data () {
        return {
            accountId: localStorage.getItem('loginuserId')
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
            const { productId, accountId } = this
            this.$emit('submit', { productId, accountId })
        }
    }
}
</script>
<style scoped>
    table{
    width: 75%;
    text-align : center;
    }
    table tr{
        padding : 12px;
        background-color: aliceblue;
           
    }
    table td{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
        border-left: 2px solid  darkgray;
    }
    
</style>