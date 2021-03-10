<template>
  <v-container>
    <v-card class="pa-5">
      <v-data-table :headers="headers" :items="values" :loading="isLoading">
        <template v-slot:item.edit="{ item }">
          <router-link :to="{ name: `statisticsEdit`, params: { item: item, id: item.id } }">
            <v-btn color="primary" dark fab small>
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
          </router-link>
        </template>
        <template v-slot:item.status="{ item }">
          <v-btn v-if="item.status == '1'" color="purple" dark rounded small>waiting..</v-btn>
          <v-btn
            @click="statusChange(item.id, 1, item.value)"
            v-if="item.status == '2'"
            color="green"
            dark
            rounded
            small
          >Completed</v-btn>
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
        { text: "Region", value: "region_name" },
        {
          text: "Date",
          align: "left",
          sortable: false,
          value: "date"
        },
        { text: "Technician Value", value: "technical_value" },
        { text: "Researcher Value", value: "value" },
        { text: "Status", value: "status" },
        { text: "Statistic Value", value: "statistic_value" },
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
    statusChange(id, val, value) {
      self.isLoading = true;
      this.$http
        .post(`research-values/update/${id}`, {status: val, value: value})
        .then(response => {
          this.successMessage(response);
          this.getValues();
          self.isLoading = false;
        })
        .catch(() => {
          self.isLoading = false;
        });
    },
    getValues() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`research-values`).then(response => {
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
        .post(`research-values/delete/${id}`)
        .then(response => {
          this.successMessage(response);
          this.getValues();
          self.isLoading = false;
        })
        .catch(() => {
          self.isLoading = false;
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