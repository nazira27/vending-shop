<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "app",
  components: {
   
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  methods: {},
  mounted() {},
  beforeMount() {
    let self = this;
    let token = window.localStorage.getItem("token");
    if (!token) {
      self.$store.commit("authorized", false);
      if (this.$route.name != "login" && this.$route.name != "home") self.redirect("login");
    } else if (!self.$store.getters.token) {
      self.$store.commit("token", token);
    }
  }
};
</script>

<style lang="scss">
@import "styles/App.scss";
@media only screen and (max-width: 600px) {
  main {
    padding: 0 !important;
  }
}
</style>
