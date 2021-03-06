/**
 * Created by YOU on 2018/1/22.
 */
const Koa = require('koa')
const KoaRouter = require('koa-router')
const fs = require('fs')
const mime = require('mime')
const {createBundleRenderer} = require('vue-server-renderer')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // performance
  template: fs.readFileSync('./index.template.html', 'utf-8'),
  clientManifest // client built manifest
})
const server = new Koa()

server.use(async (ctx, next) => {
  if (ctx.request.path.startsWith('/dist')) {
    try {
      ctx.response.type = mime.getType('./' + ctx.request.path)
      ctx.response.body = fs.readFileSync('./' + ctx.request.path)
    } catch (e) {
      ctx.response.status = 404
    }
  } else {
    await next()
  }
})

server.use(async (ctx, next) => {
  const context = {
    title: 'SSR',
    url: ctx.request.url
  }
  // console.log(renderer.renderToString.toString())
  ctx.response.body = await new Promise((resolve, reject) => {
    renderer.renderToString(context, async (err, html) => {
      if (err) {
        console.log(err)
        reject('Internal Server Error')
      }
      resolve(html)
    })
  })
})
server.listen(8088)
