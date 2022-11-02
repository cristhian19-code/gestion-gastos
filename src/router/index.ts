import {createRouter, createWebHistory} from 'vue-router'
import billingRouter from '../modules/billing/router'

const routes = [
    ...billingRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router