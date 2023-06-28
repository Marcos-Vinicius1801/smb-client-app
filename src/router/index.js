import { createRouter, createWebHistory } from 'vue-router'
import ListViewAll from '../views/ListViewAll.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user/search',
      name: 'list-user',
      component: ListView
    },
    {
      path: '/',
      name: 'list-users',
      component: ListViewAll
    },

   ]
})

export default router
