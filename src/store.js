import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		authorized: false,
		apiUrl: 'https://aqi-api.sadirbaeva.uz/api/v1/',
		message: '',
		color: '',
		token: '',
		barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
		barImage: require('@/assets/banner-01.jpg'),
		drawer: null,
	},
	getters: {
		authorized: (state) => state.authorized,
		token: (state) => state.token,
		apiUrl: (state) => {
			return state.apiUrl;
		},
		message: (state) => state.message,
		color: (state) => state.color,
	},
	mutations: {
		token(state, token) {
			state.token = token;
			Vue.http.headers.common['Authorization'] = "Bearer "+token;
			if (token) {
				state.authorized = true;
				window.localStorage.setItem('token', token);
			} else {
				state.authorized = false;
				window.localStorage.removeItem('token');
			}
		},
		SET_BAR_IMAGE(state, payload) {
			state.barImage = payload;
		},
		SET_DRAWER(state, payload) {
			state.drawer = payload;
		},
		authorized(state, authorized) {
			state.authorized = authorized;
		},
		errorMessage(state, errorMessage) {
			state.message = errorMessage;
			state.color = 'error';
		},
		successMessage(state, successMessage) {
			state.message = successMessage;
			state.color = 'success';
		},
		infoMessage(state, infoMessage) {
			state.message = infoMessage;
			state.color = 'info';
		},
		message(state, message) {
			state.message = message;
		},
		color(state, color) {
			state.color = color;
		},
	},
});
