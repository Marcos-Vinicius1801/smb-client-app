import { createRouter, createWebHistory } from 'vue-router'
import ListViewAll from '../views/ListViewAll.vue'
import ListView from '../views/ListView.vue'
import CreateView from '../views/CreateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/user',
      name: 'list-user',
      component: ListView
    },
    {
      path: '/users',
      name: 'list-users',
      component: ListViewAll
    },

   ]
})

export default router
