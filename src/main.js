import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'


// import router from './router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/demo', component: Demo}
    ]
})

createApp(App).use(router).mount('#app')
