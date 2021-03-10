<template>
  <v-snackbar v-model="snackbar" :color="color" :timeout="3000" v-if="value">
    {{value}}
    <v-btn dark @click="closeSnackbar">Закрыть</v-btn>
  </v-snackbar>
</template>
<script>
export default {
  name: "SnackbarMessage",
  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },
    color: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      snackbar: false,
      timeoutCallback: null
    };
  },
  methods: {
    closeSnackbar() {
      let self = this;
      self.snackbar = false;
      self.$store.commit("message", "");
      self.$store.commit("color", "");
    }
  },
  watch: {
    value(value) {
      if (value) {
        this.snackbar = true;
        if (this.timeoutCallback) {
          clearTimeout(this.timeoutCallback);
        }
        this.timeoutCallback = setTimeout(this.closeSnackbar, 3000);
      }
    }
  }
};
</script>