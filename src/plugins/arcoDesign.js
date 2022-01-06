import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

export default (app) => {
  app.use(ArcoVue).use(ArcoVueIcon)
}
