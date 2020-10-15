export default new Router({
  routers: [{
      path: '/login',
      component: () => import('../pages/login/login.vue')

    },
    {
      path: '/',
      component: () => import(
        '../pages/index/index.vue'
      )
    },
  ]
})
