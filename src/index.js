import Vue from 'vue';
import App from './vue_component/App.vue';
import myCore from './plugins/myCore';

const http = require('http');

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.use(myCore);

new Vue({
    el: '#app',
    render: h => h(App),
});