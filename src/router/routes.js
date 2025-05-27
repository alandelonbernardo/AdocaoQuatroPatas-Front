const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/usuarios', component: () => import('src/pages/Users/IndexPage.vue') },
      { path: '/usuarios/criar', component: () => import('src/pages/Users/CreatePage.vue') },
      { path: '/usuarios/editar:id', component: () => import('src/pages/Users/UpdatePage.vue') },

      // Animals
      { path: '/animais', component: () => import('src/pages/Animals/IndexPage.vue')},
      { path: '/animais/criar', component: () => import('src/pages/Animals/CreatePage.vue')},
      { path: '/animais/editar:id', component: () => import('src/pages/Animals/UpdatePage.vue')},

      //Adoptions
      { path: '/adocoes', component: () => import('src/pages/Adoptions/IndexPage.vue')},
      { path: '/adocoes/criar', component: () => import('src/pages/Adoptions/CreatePage.vue')},
      { path: '/adocoes/editar:id', component: () => import('src/pages/Adoptions/UpdatePage.vue')},

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
