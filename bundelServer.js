/**
 * Created by YOU on 2018/1/22.
 */
const Koa = require('koa')
const {createBundleRenderer} = require('vue-server-renderer')
const renderer = createBundleRenderer('./src/vue-ssr-server-bundle.json', {
  runInNewContext: false, // 推荐
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
  // clientManifest // （可选）客户端构建 manifest
})
const createApp = require('./src/main')
const server = new Koa()

server.use(async (ctx, next) => {
  const context = {
    title: 'SSR',
    url: ctx.request.url
  }
  const app = createApp(context)
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      return ctx.throw('Internal Server Error')
    }
    ctx.response.body = html
  })
})
server.listen(8088)