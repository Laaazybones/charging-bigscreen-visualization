import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Demo from './views/Demo.vue'
import Screen from './views/Screen.vue'
// import router from './router'
import BaiduMap from 'vue-baidu-map-3x'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/test', component: Test },
        { path: '/demo', component: Demo },
        { path: '/screen', component: Screen },
    ]
})

createApp(App).use(router).use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'JR04XYbAGLDdr0GbLgQIPsrboxgaZvJe',
    // v:'2.0',  // 默认使用3.0
    // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
}).mount('#app')
