import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'styles/index.scss'
import elePlugin from 'plugins/element3.js'

// 完整引入
// import element3 from "element3";
// import "element3/lib/theme-chalk/index.css";
// createApp(App).use(element3)

// 按需引入
// import 'element3/lib/theme-chalk/button.css'
// import { ElButton } from 'element3'
// createApp(App).use(ElButton)

createApp(App).use(store).use(router).use(elePlugin).mount('#app')
