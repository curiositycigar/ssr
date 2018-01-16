/**
 * Created by YOU on 2018/1/16.
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home')
const User = () => import('../pages/user')
// import Home = () => {}

Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'Home',
        component: Home,
        path: '/'
      },
      {
        name: 'User',
        component: User,
        path: '/user'
      }
    ]
  })
}