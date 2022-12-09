import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
        
const router = createRouter({
  history: createWebHistory('/github-actions/'),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
  ]
})

export default router
