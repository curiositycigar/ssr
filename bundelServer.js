/**
 * Created by YOU on 2018/1/22.
 */
const Koa = require('koa')
const {createBundleRenderer} = require('vue-server-renderer')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // performance
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
  clientManifest // client built manifest
})
const server = new Koa()

server.use(async (ctx, next) => {
  const context = {
    title: 'SSR',
    url: ctx.request.url
  }
  // console.log(renderer.renderToString.toString())
  renderer.renderToString(context, (err, html) => {
    console.log('renderToString!!!!!!!!') // this can't be execute
    console.log(arguments) // this can't be execute
    if (err) {
      console.log('CONSOLE ERROR:', err)
      return ctx.throw('Internal Server Error')
    }
    ctx.response.body = html
  })
})
server.listen(8088)
