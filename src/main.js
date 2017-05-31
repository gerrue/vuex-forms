// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import InputGroup from "./components/InputGroup.vue";
Vue.component('input-group', InputGroup)

import FormExample from "./components/FormExample.vue";
Vue.component('form-example', FormExample)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})