<template>
  <v-container>
    <v-card height="70vh" class="elevation-0">
      <v-row class="my-10">
        <div class="login-box">
          <div class="text-center mb-10">
            <h1 class="mt-10 mb-3 display-1 font-weight-bold">Welcome to Air Indexer!</h1>
            <p>To get started, please log-in below</p>
          </div>
          <v-form @submit.prevent="handleSubmit" method="post" ref="form">
            <v-text-field
              v-model="email"
              label="Email"
              placeholder="test1@test.com"
              type="email"
              outlined
              :rules="emailRules"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              placeholder="Password123"
              type="password"
              outlined
            ></v-text-field>
            <v-btn
              type="submit"
              :loading="isLoading"
              block
              color="#4cbbe4"
              dark
              elevation="5"
            >Submit</v-btn>
          </v-form>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "LoginInput",
  data() {
    return {
      password: "Password123",
      email: "test1@test.com",
      isLoading: false,
      checkbox: false,
      emailRules: [
        v => /.+@.+\..+/.test(v ? v : "test1@test.com") || "test1@test.com"
      ]
    };
  },
  methods: {
    handleSubmit() {
      let formData = new FormData();
      this.isLoading = true;
      formData.append("username", this.email);
      formData.append("password", this.password);
      // window.localStorage.setItem("token", null)
      // this.$http
      //   .post("auth/login", formData)
      //   .then(response => {
      //     this.$store.commit("token", response.data.access_token);
      //     this.redirect("app");
      //     this.isLoading = false;
      //   })
      //   .catch(response => {
      //     this.isLoading = false;
      //     console.log(response);
      //   });
    }
  }
};
</script>
<style scoped>
.login-box {
  min-width: 300px;
  max-width: 480px;
  margin: 30px auto;
}

.question {
  margin: 10px;
}

.question a {
  color: #999;
}

.sign-up a {
  text-decoration: none;
}
</style>