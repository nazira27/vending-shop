<template>
  <v-container>
    <v-card class="pa-5">
      <v-data-table :headers="headers" :items="values" :loading="isLoading">
        <template v-slot:item.edit="{ item }">
          <router-link :to="{ name: `researcherEdit`, params: { item: item, id: item.id } }">
            <v-btn color="primary" dark fab small>
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
          </router-link>
        </template>
        <template v-slot:item.status="{ item }">
          <v-btn v-if="item.status == '1'" color="purple" dark rounded small>waiting..</v-btn>
          <v-btn v-if="item.status == '2'" color="green" dark rounded small>Completed</v-btn>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-btn @click="handleDelete(item.id)" color="pink" dark fab small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <template
          v-slot:item.date="{ item }"
        >{{item.researcher_value_model ? item.researcher_value_model.date : ""}}</template>
        <template v-slot:item.value="{ item }">
          <v-btn
            :color="quality.aqi_category.color"
            v-for="(quality,key) in item.qualities"
            :key="key"
          >{{quality.value}} - {{quality.aqi_category_name}} - {{quality.aqi_index}}</v-btn>
          <br />
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
        { text: "Region ID", value: "region_id" },
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "region_name"
        },
        { text: "Technician Value", value: "value" },
        { text: "Status", value: "status" },
        { text: "Researcher Value", value: "researcher_value" },
        { text: "Date", value: "date" },
        { text: "Edit", value: "edit" },
        { text: "Delete", value: "delete" }
      ],
      fields: [],
      regions: [],
      values: [],
      isLoading: false
    };
  },
  methods: {
    getValues() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`technical-values`).then(response => {
        console.log(response);
        self.values = response.data.data;
        // self.fields.forEach((item, key) => {
        //   self.fields[key]["value"] = null;
        // });
        self.isLoading = false;
      });
    },
    handleDelete(id) {
      self.isLoading = true;
      this.$http
        .post(`technical-values/delete/${id}`)
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
    this.getValues();
    // this.getValues();
  }
};
</script>