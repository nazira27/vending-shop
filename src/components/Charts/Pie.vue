<template>
  <v-container class="pie">
    <v-skeleton-loader v-if="isLoading" class="ma-3" max-height="480" type="table"></v-skeleton-loader>
    <v-row v-else>
      <v-col md="6" cols="12">
          <h3 class="display-1 text-center mb-5 ">
              Regions by Areas
          </h3>
        <pie-chart :chartData="chartData" :options="chartOptions"></pie-chart>
      </v-col>
      <v-col md="6" cols="12">
          <h3 class="display-1 text-center mb-5">
              Regions by Population
          </h3>
        <bar-chart :chartData="barData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
export default {
  name: "Pie",
  components: {
    PieChart, BarChart
  },
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        hoverBorderWidth: 20
      },
      barData:{},
      chartData: {},
      labels: [],
      data: [],
      bar: [],
      regions: [],
      isLoading: false
    };
  },
  methods: {
    getRegions() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`regions`).then(response => {
        self.regions = response.data.data;
        var coloR = [];
        var dynamicColors = function() {
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);
          return "rgb(" + r + "," + g + "," + b + ")";
        };
        self.regions.forEach(element => {
          let val = element.area_km.toString().replace(",", "");
          self.data.push(parseInt(val));
          self.labels.push(element.name);
          self.bar.push(element.population)
          coloR.push(dynamicColors());
        });
        this.chartData = {
          labels: self.labels,
          datasets: [
            {
              label: null,
              backgroundColor: coloR,
              data: self.data
            }
          ]
        };
        this.barData = {
          labels: self.labels,
          datasets: [
            {
              label: null,
              backgroundColor: coloR,
              data: self.bar
            }
          ]
        };
        self.isLoading = false;
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
  height: 500px;
}
</style>