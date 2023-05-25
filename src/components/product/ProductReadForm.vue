<template>
    <div align="center">
        <table>
            <tr>상품 번호
                <td>
                    {{ product.productId }}
                </td>
            </tr>
            <tr>상품 명
                <td>
                    {{ product.productName }}
                </td>
            </tr>
            <tr>상품 가격
                <td>
                    {{ product.productPrice }}
                </td>
            </tr>
        </table>
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
    table{
    width: 75%;
    text-align : left;
    }
    tanle th{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
    }
    table td{
        padding : 12px;
    }
    table tr:nth-of-type(even){
        background-color: rgba(0,0,255,0.1);
    }
    
</style>