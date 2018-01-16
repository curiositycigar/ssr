/**
 * Created by YOU on 2018/1/16.
 */
const Vue = require('vue')
const Koa = require('koa')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
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