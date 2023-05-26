import Vue from "vue";
import VueRouter from "vue-router";

import OrderListPage from "@/views/order/OrderListPage.vue"
import OrderConfirmationPage from "@/views/order/OrderConfirmationPage.vue"


Vue.use(VueRouter);

const orderRoutes = [
    {
        path: "/order-list-page",
        name: "OrderListPage",
        component: OrderListPage,
      },
      {
        path: "/order-confirmation-page",
        name: "OrderConfirmationPage",
        components: {
          default: OrderConfirmationPage,      },
        props: {
          default: true,
      }
      },

      
]

export default orderRoutes