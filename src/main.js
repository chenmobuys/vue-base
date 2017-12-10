import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

// document.addEventListener('deviceready', function() {
//     new Vue({
//         el: '#app',
//         router,
//         store,
//         template: '<App/>',
//         components: { App }
//     })
//     window.navigator.splashscreen.hide()
// }, false);


