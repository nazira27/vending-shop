<template>
  <div class="banner">
    <v-container>
      <v-row class="mt-5">
        <div style="width: 100%">
          <v-btn
            v-if="!show"
            rounded
            color="primary"
            large
            class="mx-2 started mt-5 mb-5"
            @click="getUsers"
          >
            Показать пользователей
          </v-btn>
          <router-link :to="{ name: `addUsers` }">
            <v-btn
              v-if="show"
              rounded
              color="primary"
              large
              class="mx-2 started mt-5 mb-5"
              style="float: right"
            >
              Добавить <v-icon>mdi-plus</v-icon>
            </v-btn>
          </router-link>
        </div>
        <h2 v-if="show">Список пользователей</h2>
        <v-data-table
          v-if="show && items.length"
          :headers="headers"
          :items="items"
        >
          <template v-slot:item.edit="{ item }">
            <v-btn color="primary" dark fab small @click="editItem(item)">
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
          </template>
          <template v-slot:item.delete="{ item }">
            <v-btn @click="handleDelete(item.id)" color="pink" dark fab small>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      show: false,
      headers: [
        {
          text: "UserId",
          align: "start",
          sortable: false,
          value: "userId",
        },
        { text: "id", value: "id" },
        { text: "Title", value: "title" },
        { text: "Body", value: "body" },
        { text: "Edit", value: "edit", sortable: false },
        { text: "Delete", value: "delete", sortable: false },
      ],
      items: [],
    };
  },
  methods: {
    getUsers() {
      this.show = true;
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          this.items = json;
          console.log(json);
        });
    },
    editItem(item) {
      this.$router.push({
        name: "addUsers",
        params: { item: item },
        query: { edit: true },
      });
    },
    handleDelete(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
        console.log(id)
    },
  },
};
</script>
<style lang="scss">
.vue-typer .custom.typed {
  color: white;
}
</style>
<style scoped>
h1 {
  z-index: 10000;
}
p {
  z-index: 10000;
}
.banner >>> .v-image__image--cover {
  filter: brightness(0.5);
}
.banner {
  position: relative;
  background-repeat: no-repeat;
}
/* .banner:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 0;
  opacity: 0.6;
} */
.main {
  margin-top: 20%;
}
.banner:before {
  filter: brightness(0.5);
}
.text-center {
  text-align: center;
}
.started:hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.started::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2098d1;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.started:hover::before,
.started:focus::before,
.started:active::before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
h1 {
  color: white;
  font-weight: 700;
}
.cd-words-wrapper {
  display: inline-block;
  position: relative;
  text-align: left;
}
</style>
