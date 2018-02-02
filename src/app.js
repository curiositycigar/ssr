/**
 * Created by YOU on 2018/1/16.
 */
import Vue from 'vue'
import App from './App.vue'
import {sync} from 'vuex-router-sync'
import {createRouter} from './router'
import {createStore} from './store'

// import {
//   Button
// } from 'element-ui'
// Vue.use(Button)

import ElementUi from 'element-ui'
Vue.use(ElementUi)
// import 'element-ui/lib/theme-chalk/index.css'

export function createApp() {
  const router = createRouter()
  const store = createStore()
  // 同步路由状态到store
  sync(store, router)
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}