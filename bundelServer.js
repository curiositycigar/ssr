/**
 * Created by YOU on 2018/1/22.
 */
const Koa = require('koa')
const {createBundleRenderer} = require('vue-server-renderer')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // 推荐
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
  clientManifest // （可选）客户端构建 manifest
})
const server = new Koa()

server.use(async (ctx, next) => {
  const context = {
    title: 'SSR',
    url: ctx.request.url
  }
  console.log(renderer)
  renderer.renderToString(context, (err, html) => {
    console.log('renderToString!!!!!!!!')
    if (err) {
      console.log(err)
      return ctx.throw('Internal Server Error')
    }
    ctx.response.body = html
  })
})
server.listen(8088)
