import moment from "moment";

const globalHandler = {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					loader: false,
				};
			},
			methods: {
				handleError(response) {
					if (response.status === 401) {
						this.loader = false;
						this.redirect('login');
					}
					this.$store.commit('errorMessage', response.data.errorMessage);
				},
				redirect(path, name, params) {
					this.$router.push({ name: name, path: path, params: params });
				},
				moneyFormat(balance, scale) {
					return (balance / Math.pow(10, scale))
						.toFixed(scale)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				},
				successMessage(response) {
					this.$store.commit('successMessage', response.data.message);
				},
				infoMessage(message) {
					this.$store.commit('infoMessage', message);
				},
				getStaticImage(image) {
					return require(`@/assets/${image}`);
				},
				convertMS(ms) {
					if (ms) return moment(String(new Date(ms))).format('HH:mm DD.MM.YYYY');
					else return ms;
				},
			},
		});
	},
};
export default globalHandler;
