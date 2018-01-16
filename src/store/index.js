/**
 * Created by YOU on 2018/1/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {},
    actions: {},
    mutations: {}
  })
}