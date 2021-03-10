<template>
  <v-container class="pie">
    <v-row>
      <v-skeleton-loader v-if="isLoading" class="ma-3" max-height="480" type="img"></v-skeleton-loader>
      <v-col cols="12" v-else>
        <h3 class="display-1 text-center mb-5">Statistics</h3>
        <v-select
          @change="getData"
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
      <v-col cols="12">
        <v-skeleton-loader v-if="isUpdating" class="ma-3" max-height="480" type="image"></v-skeleton-loader>
        <line-chart v-else :chartData="chartData"></line-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from "./LineChart.js";
export default {
  name: "sLine",
  components: {
    LineChart
  },
  data() {
    return {
      barData: {},
      chartData2: {
        labels: ["2020-04-29", "2020-04-29", "2020-04-29"],
        datasets: [
          {
            label: null,
            backgroundColor: "#4cbbe496",
            borderColor: "#4cbbe4",
            data: ["50", "60", "30"]
          }
        ]
      },
      chartData: {},
      labels: [],
      data: [],
      bar: [],
      regions: [],
      region: "Tashkent City	",
      isLoading: false,
      isUpdating: true
    };
  },
  methods: {
    getRegions() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`regions`).then(response => {
        self.regions = response.data.data;
        this.getData();
        self.isLoading = false;
      });
    },
    getData() {
      let region_id = "";
      if (this.regions.find(item => item.name == this.region)) {
        region_id = this.regions.find(item => item.name == this.region).id;
      }
      if (!region_id) {
        region_id = "13";
      }
      let self = this;
      self.isUpdating = true;
      self.$http
        .get(`dates/statistics?region_id=${region_id}`)
        .then(response => {
          this.chartData = {
            labels: response.data.data.labels,
            datasets: [
              {
                label: null,
                backgroundColor: "#4cbbe496",
                borderColor: "#4cbbe4",
                data: response.data.data.data
              }
            ]
          };
          self.isUpdating = false;
        });
    }
  },
  mounted() {
    this.getRegions();
  }
};
</script>
<style scoped>
.pie {
  height: 600px;
}
</style>