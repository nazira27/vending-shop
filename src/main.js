import Vue from 'vue';
import App from './App.vue';
import mixins from './plugins/mixins';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import axios from 'axios'
import vuetify from './plugins/vuetify';
import vueScrollto from 'vue-scrollto';
Vue.prototype.$http = axios
Vue.use(mixins);
Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});
Vue.use(vueScrollto);
new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
