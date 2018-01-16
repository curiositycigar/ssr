/**
 * Created by YOU on 2018/1/16.
 */

const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: '<div>the request url is {{url}}</div>'
  })
}