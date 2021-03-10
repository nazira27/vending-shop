import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  props: ["chartData"],
  mixins: [reactiveProp],
  data: () => ({
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}