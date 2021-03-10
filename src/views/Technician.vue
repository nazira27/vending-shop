<template>
  <v-container>
    <v-card class="pa-5 ma-3 elevation-5">
      <h3 class="error-text text-center">{{error}}</h3>
      <v-form @submit.prevent="handleSubmit" method="post" ref="form">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <h3 class>Choose Region</h3>
            <v-select
              :items="regions"
              v-model="region"
              item-text="name"
              label="Regions"
              solo
              rounded
              filled
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class>Choose Date</h3>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  placeholder="Date"
                  prepend-inner-icon="event"
                  readonly
                  rounded
                  filled
                  outlined
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="6" v-for="item in fields" :key="item.name">
            <v-text-field v-model="item.value" :label="item.name" required filled rounded outlined></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          rounded
          color="primary"
          type="submit"
          :loading="isLoading"
          block
          large
          class="subtitle-1"
        >Submit</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Technician",

  components: {},
  data() {
    return {
      date: "",
      region: "",
      regions: [],
      fields: [],
      values: [],
      isLoading: false,
      menu2: false,
      error: "",
    };
  },
  methods: {
    getPollutants() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`pollutants`).then(response => {
        self.fields = response.data.data;
        self.fields.forEach((item, key) => {
          self.fields[key]["value"] = null;
        });
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
    },
    getValues() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`technical-values`).then(response => {
        console.log(response)
        self.values = response.data.data;
        // self.fields.forEach((item, key) => {
        //   self.fields[key]["value"] = null;
        // });
        self.isLoading = false;
      });
    },
    handleSubmit() {
      // let formData = new FormData();
      this.isLoading = true;
      let region_id = this.regions.find(item => item.name == this.region).id;
      let qualities = {};
      this.fields.forEach(item => {
        if (item.value) {
          qualities[item.id] = item.value;
        }
      });
      // console.log(qualities);
      // formData.append("date", this.date);
      // formData.append("region_id", region_id);
      // formData.append(qualities);
      this.$http
        .post("technical-values/create", {
          qualities: qualities,
          region_id: region_id,
          date: this.date
        })
        .then(response => {
          this.$router.push({ name: "researcher" });
          this.successMessage(response);
          this.isLoading = false;
        })
        .catch(response => {
          this.error = response.data.message;
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.getRegions();
    this.getPollutants();
    this.getValues();
  }
};
</script>
<style lang="scss" scoped>
</style>
