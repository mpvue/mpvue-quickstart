{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// mpvue has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
