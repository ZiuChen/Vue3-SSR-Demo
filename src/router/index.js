import { createRouter } from 'vue-router'

/**
 * 创建Router实例 通过函数的方式创建，可以传入不同的history
 * @param {*} history 路由模式 服务端渲染时使用createMemoryHistory 浏览器端渲染时使用createWebHistory
 * @returns Router实例
 */
export default function (history) {
  return createRouter({
    history,
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  })
}
