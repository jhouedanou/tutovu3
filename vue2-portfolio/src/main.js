import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/tailwind.css';
import {routes} from './routes.js'
import {createRouter,createWebHistory} from 'vue-router'
const router = createRouter({
    history:createWebHistory(),
    routes
})

const app=  createApp(App)
app.use(router)
app.mount('#app')

