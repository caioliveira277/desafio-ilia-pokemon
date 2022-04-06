import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mais-detalhes",
      name: "moreDetails",
      component: () => import("@/views/more-details/MoreDetailsView.vue"),
    },
  ],
});

export default router;
