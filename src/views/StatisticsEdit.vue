<template>
  <v-container>
    <v-card class="pa-5 ma-3 elevation-5">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h3>Region: {{fields.region_name}}</h3>
          <h3>Date: {{fields.date}}</h3>
          <h3>technical_value: {{fields.technical_value}}</h3>
          <h4 v-for="item in fields.qualities" :key="item.id">
            {{item.pollutant_name}} :
            {{item.value}}
          </h4>
          <h3>Value: {{fields.value}}</h3>
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
      this.isLoading = true;
      this.$http
        .post("statistic-values/create", {
          research_value_id: this.fields.id,
          value: this.value
        })
        .then(response => {
          this.successMessage(response);
          this.$router.push({ name: "statistics" });
          this.isLoading = false;
        })
        .catch(response => {
          this.isLoading = false;
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
