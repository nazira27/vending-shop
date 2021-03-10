<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit" method="post" ref="form">
      <v-row>
        <router-link to="/">
          <v-icon>mdi-keyboard-backspace</v-icon>
        </router-link>
        <v-col cols="12" sm="12">
          <h2>Данные пользователя</h2>
          <h3>Title</h3>
          <v-text-field
            v-model="form.title"
            label="Title"
            single-line
            outlined
            rounded
            filled
          ></v-text-field>
          <label>Body</label>
          <v-text-field
            v-model="form.body"
            label="Body"
            single-line
            outlined
            rounded
            filled
          ></v-text-field>
          <v-btn
            rounded
            color="primary"
            type="submit"
            :loading="isLoading"
            block
            large
            class="subtitle-1"
            >{{ method==='post' ? 'Submit' : 'Edit'}}</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: "AddUsers",
  data() {
    return {
      isLoading: false,
      form: {
        title: "",
        body: "",
        id: "",
        userId: "",
      },
      method: "post",
    };
  },
  methods: {
    handleSubmit() {
      if ((this.method === "put")) {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          body: JSON.stringify({
            id: this.form.id,
            title: this.form.title,
            body: this.form.body,
            userId: this.form.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      } else {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: this.form.title,
            body: this.form.body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      }

      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    if (this.$route.query.edit) {
      console.log(this.$route.params.item);
      this.form = this.$route.params.item;
      this.method = "put";
    }
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
