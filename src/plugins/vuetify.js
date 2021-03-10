import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import 'styles/_variables.scss'
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
        themes: {
          light: {
            primary: '#4cbbe4;',
            background: '#E5E5E5',
            lightGray: '#FBFBFB',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
