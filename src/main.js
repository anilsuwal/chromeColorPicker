import Vue from 'vue'
import App from './App.vue'
import { chrome } from 'vue-color'

new Vue({
    el: '#app',
    components: {
        'chrome-picker': chrome
    },
    render: h => h(App)
})