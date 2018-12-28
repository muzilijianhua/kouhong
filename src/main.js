// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/vuex.js"


import moment from 'moment'
import Mint from 'mint-ui'
import "mint-ui/lib/style.css"
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"


Vue.use(Mint)



Vue.config.productionTip = false

Vue.filter('datafomate', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(datastr).format(pattern)
})









/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    components: { App },
    template: '<App/>'
})