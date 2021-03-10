<template>
  <v-container>
    <v-card class="pa-5 ma-3 elevation-5">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h3>Region: {{fields.region_name}}</h3>
          <h3>Region Population: {{fields.region.population}}</h3>
          <h3>Region capital: {{fields.region.capital}}</h3>
          <h3>Region Area: {{fields.region.area_km}}</h3>
          <h3>Value: {{fields.value}}</h3>

          <v-btn
          block
            :color="quality.aqi_category.color"
            v-for="(quality,key) in fields.qualities"
            :key="key"
          >{{quality.pollutant_name}} - {{quality.value}} - {{quality.aqi_category_name}} - {{quality.aqi_index}}</v-btn>
          <br />
        </v-col>
        <v-col cols="12" md="6">
          <v-form @submit.prevent="handleSubmit" method="post" ref="form">
            <v-text-field v-model="value" label="Aqi value" required filled rounded outlined></v-text-field>
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
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ResearcherEdit",

  components: {},
  data() {
    return {
      fields: [],
      isLoading: false,
      value: ""
    };
  },
  methods: {
    handleSubmit() {
      self.isLoading = true;
      this.$http
        .post("research-values/create", {
          technical_value_id: this.fields.id,
          value: this.value
        })
        .then(response => {
          this.successMessage(response);
          this.$router.push({ name: "researcher" });
          self.isLoading = false;
        })
        .catch(response => {
          self.isLoading = false;
          console.log(response);
        });
    }
  },
  mounted() {
    this.fields = this.$route.params.item;
  }
};
</script>
<style lang="scss" scoped>
</style>
