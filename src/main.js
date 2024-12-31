import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Demo from './views/Demo.vue'
import Screen from './views/Screen.vue'
// import router from './router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/test', component: Test},
        {path: '/demo', component: Demo},
        {path: '/screen', component: Screen},
    ]
})

createApp(App).use(router).mount('#app')
