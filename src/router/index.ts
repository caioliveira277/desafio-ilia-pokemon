import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";
import MoreDetailsView from "@/views/more-details/MoreDetailsView.vue";
import SpashView from "@/views/splash/splashView.vue";
import { HeaderComponent } from "@/components";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "spash",
      component: SpashView,
    },
    {
      path: "/inicio",
      name: "initial",
      components: {
        default: HomeView,
        HeaderComponent,
      },
    },
    {
      path: "/mais-detalhes",
      name: "moreDetails",
      components: {
        default: MoreDetailsView,
        HeaderComponent,
      },
    },
  ],
});

export default router;
