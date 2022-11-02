const routes = [
    {
        path: '/',
        component: () => import('../layout/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'inicio-pagos',
                component: () => import('../views/HomePage.vue')
            },
            {
                path: 'planificar',
                name: 'planificar-pagos',
                component: () => import('../views/PlanificarPagosPage.vue')
            },
            {
                path: 'lista',
                name: 'lista-pagos',
                component: () => import('../views/ListaPagosPage.vue')
            }
        ]
    }
]

export default routes