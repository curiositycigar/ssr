/**
 * Created by YOU on 2018/1/15.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
// import renderer from 'vue-server-renderer'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<div>TEST</div>'
})

export default function (context) {
  return new Promise((resolve, reject) => {
    resolve(app);
  });
};
