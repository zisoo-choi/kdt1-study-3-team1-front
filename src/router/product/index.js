import Vue from "vue";
import VueRouter from "vue-router";

import ProductListPage from "@/views/product/ProductListPage.vue"
import ProductRegisterPage from "@/views/product/ProductRegisterPage.vue"
import ProductModifyPage from "@/views/product/ProductModifyPage.vue"

Vue.use(VueRouter);

const productRoutes = [
    {
        path: "/product-list-page",
        name: "ProductListPage",
        component: ProductListPage,
      },
      {
        path: "/product-register-page",
        name: "ProductRegisterPage",
        component: ProductRegisterPage,
      },
      {
        path: "/product-modify-page",
        name: "ProductModifyPage",
        component: ProductModifyPage,
      },
]

export default productRoutes