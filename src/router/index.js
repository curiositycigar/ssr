/**
 * Created by YOU on 2018/1/16.
 */
import Vue from "vue";
import Router from "vue-router";

let Home = () => import('../pages/home.vue')
let User = () => import('../pages/user.vue')
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
        path: '/',
        redirect: '/home'
      }
    ]
  })
}