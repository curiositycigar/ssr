/**
 * Created by YOU on 2018/1/16.
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      title: 'SSR',
      version: '1.0.0'
    },
    actions: {
      fetchItem(id) {
        return new Promise(function (resolve, reject) {
          if (id) {
            setTimeout(function () {
              resolve({data: {a: id}})
            })
          } else {
            reject({data: {error: 'Error'}})
          }
        })
      }
    },
    mutations: {}
  })
}