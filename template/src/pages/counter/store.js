// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  state: {
    count: 0{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mutations: {
    increment: (state) => {
      const obj = state{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      obj.count += 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    decrement: (state) => {
      const obj = state{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      obj.count -= 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
