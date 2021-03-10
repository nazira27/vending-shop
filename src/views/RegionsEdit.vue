<template>
  <v-container>
    <v-card class="pa-5 ma-3 elevation-5">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h3>Region: {{fields.name}}</h3>
          <h3>Region Population: {{fields.population}}</h3>
          <h3>Region capital: {{fields.capital}}</h3>
          <h3>Region Area in km: {{fields.area_km}}</h3>
          <h3>Region Area in Mills: {{fields.area_mi}}</h3>
          <h3>Vehicles: {{fields.vehicles}}</h3>
          <h3>Zip_code: {{fields.zip_code}}</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-form @submit.prevent="handleSubmit" method="post" ref="form">
            <v-text-field v-model="value" label="Population" required filled rounded outlined></v-text-field>
            <v-text-field v-model="value_v" label="Vehicles" required filled rounded outlined></v-text-field>
            <v-text-field v-model="value_z" label="Zip code" required filled rounded outlined></v-text-field>
            <v-btn
              rounded
              color="primary"
              type="submit"
              :loading="isLoading"
              block
              large
              class="subtitle-1"
            >Update</v-btn>
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
      value: "",
      value_v: "",
      value_z: ""
    };
  },
  methods: {
    handleSubmit() {
      self.isLoading = true;
      this.$http
        .post(`regions/update/${this.fields.id}`, {
          vehicles: this.value_v,
          population: this.value,
          zip_code: this.value_z
        })
        .then(response => {
          this.successMessage(response);
          this.redirect("researcher");
          self.isLoading = false;
        })
        .catch(() => {
          self.isLoading = false;
        });
    }
  },
  mounted() {
    this.fields = this.$route.params.item;
    this.value = this.fields.population;
  }
};
</script>
<style lang="scss" scoped>
</style>
