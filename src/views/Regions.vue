<template>
  <v-container>
    <v-card class="pa-5">
      <v-data-table :headers="headers" :items="regions">
        <template v-slot:item.edit="{ item }">
          <router-link :to="{ name: `regionsEdit`, params: { item: item, id: item.id } }">
            <v-btn color="primary" dark fab small>
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
          </router-link>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-btn @click="handleDelete(item.id)" color="pink" dark fab small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Area", value: "area_km" },
        { text: "Population", value: "population" },
        { text: "Vehicles", value: "vehicles" },
        { text: "Zip_code", value: "zip_code" },
        { text: "Edit", value: "edit" },
        { text: "Delete", value: "delete" }
      ],
      fields: [],
      regions: []
    };
  },
  methods: {
    handleDelete(id) {
      self.isLoading = true;
      this.$http
        .post(`regions/delete/${id}`)
        .then(response => {
          this.successMessage(response);
          self.isLoading = false;
        })
        .catch(response => {
          self.isLoading = false;
          console.log(response);
        });
    },
    getRegions() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`regions`).then(response => {
        self.regions = response.data.data;
        self.isLoading = false;
      });
    }
  },

  mounted() {
    this.getRegions();
  }
};
</script>