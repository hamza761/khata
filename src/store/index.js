import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      dTheme: true,
      items: [{
        incomeDescription: 'abc',
        incomeValue: '2334',
        id: 1,
        children: [
          {
            id: '1.1',
            incomeDescription: 'abc2',
            incomeValue: '2334',
            children: [
            ]
          }
        ]
      }, {
        id: 2,
        incomeDescription: 'abc',
        incomeValue: '2334'
      },]
    },
    getters: {
      getField,
    },
    mutations: {
      updateField,
      changeTheme(state) {
        state.dTheme = !state.dTheme;
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
