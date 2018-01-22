/**
 * Created by YOU on 2018/1/16.
 */
import {createApp} from './app'
// 客户端特定引导逻辑……
const {app, router, store} = createApp()
// 这里假定 App.vue 模板中根元素具有 `id="app"`
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }
    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({
          store,
          route: to
        })
      }
    })).then(() => {
      next()
    }).catch(next)
  })
  app.$mount('#app')
})
