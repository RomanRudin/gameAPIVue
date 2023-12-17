import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import( "../views/Main.vue"),
    },
    {
      path: "/fantasy",
      name: "fantasy",
      component: () => import( "../views/Fantasy.vue"),
    },
    {
      path: "/royale",
      name: "royale",
      component: () => import( "../views/Royale.vue"),
    },
    {
      path: "/rpg",
      name: "rpg",
      component: () => import( "../views/RPG.vue"),
    },
    {
      path: "/shooter",
      name: "shooter",
      component: () => import( "../views/Shooter.vue"),
    },
    {
      path: "/strategy",
      name: "strategy",
      component: () => import( "../views/Strategy.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import( "../views/Detail.vue"),
    },
  ]
})

export default router
