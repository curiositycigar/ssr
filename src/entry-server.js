/**
 * Created by YOU on 2018/1/16.
 */
import {createApp} from './app'
export default context => {
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp()

    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // 设置服务端router的位置
    router.push(context.url)
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady = (() => {
      const matchedComponents = router.getMatchedComponents()
      // 找不到路由，reject，404
      if (!matchedComponents.length) {
        return reject({code: 404})
      }
      Promise.all(matchedComponents.map(Comment => {
        if (Comment.asyncData) {
          return Comment.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}