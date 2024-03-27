import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title:'Home title'
      },
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      meta:{
        title:'Test title'
      },
      
      component: () => import('../views/TestView.vue')
    }
  ]
})

// 每頁的 title header meta 都不同
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title
  if(nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach(tag => {
      const element = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)
      if (element) {
        element.setAttribute('content', tag.content)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute(tag.property ? 'property' : 'name', tag.property || tag.name)
        meta.setAttribute('content', tag.content)
        document.getElementsByTagName('head')[0].appendChild(meta)
      }
    })
  }
  next()
})
export default router
