import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册 arco design
import installArcoDesign from './plugins/arcoDesign'
// 引入基础 css
import './styles/index.scss'
// 路由守卫
import './permission'

const app = createApp(App)
installArcoDesign(app)

app.use(store).use(router).mount('#app')
