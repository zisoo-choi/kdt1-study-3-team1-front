import Vue from "vue";
import VueRouter from "vue-router";

import OrderListPage from "@/views/order/OrderListPage.vue"

Vue.use(VueRouter);

const orderRoutes = [
    {
        path: "/order-list-page",
        name: "OrderListPage",
        component: OrderListPage,
      },
]

export default orderRoutes