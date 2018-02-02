/**
 * Created by YOU on 2018/1/16.
 */
import Vue from "vue";
import Router from "vue-router";

let Home = () => import('../pages/home.vue')
let User = () => import('../pages/user.vue')
let Page1 = () => import('../pages/page1.vue')
let Page2 = () => import('../pages/page2.vue')
// import Home = () => {}

Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        component: Home,
        path: '/home'
      },
      {
        component: User,
        path: '/user/:name?'
      },
      {
        component: Page1,
        path: '/page1'
      },
      {
        component: Page2,
        path: '/page2'
      },
      {
        path: '/',
        redirect: '/home'
      }
    ]
  })
}