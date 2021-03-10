import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  data: () => ({
    // chartdata: {
    //   labels: ['Январь', 'Февраль'],
    //   datasets: [
    //     {
    //       label: 'Данные 1',
    //       backgroundColor: '#f87979',
    //       data: [40, 20]
    //     }
    //   ]
    // },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}