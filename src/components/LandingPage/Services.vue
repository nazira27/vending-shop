<template>
  <div class="wrapper">
    <v-container>
      <v-row>
        <v-col sm="12" md="12" lg="12" align="center">
          <h1 class="display-1 my-10 highlight">What we are taking into account...</h1>
        </v-col>
        <v-col align="center">
          <v-btn color="pink" dark class="mx-3" v-for="item in fields" :key="item.id">{{item.name}}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-row>
          <v-col sm="12" md="4" lg="4" xl="4">
            <div class="box">
              <h3 class="title my-3">Population</h3>
              <p>“Air pollution and population health” is one of the most important environmental and public health issues. Economic development, urbanization, energy consumption, transportation/motorization, and rapid population growth are major driving forces of air pollution in large cities, especially in megacities. Air pollution levels in developed countries have been decreasing dramatically in recent decades.</p>
            </div>
          </v-col>
          <v-col sm="12" md="4" lg="4" xl="4">
            <div class="box">
              <h3 class="title my-3">Air Pollutants</h3>
              <p>Sources of air pollution include gases (such as ammonia, carbon monoxide, sulfur dioxide, nitrous oxides, methane and chlorofluorocarbons), particulates (both organic and inorganic), and biological molecules. It may cause diseases, allergies and even death to humans; it may also cause harm to other living organisms such as animals and food crops, and may damage the natural or built environment</p>
            </div>
          </v-col>
          <v-col sm="12" md="4" lg="4" xl="4">
            <div class="box">
              <h3 class="title my-3">Vehicles</h3>
              <p>Cars, trucks, and buses powered by fossil fuels are major contributors to air pollution. In fact, transportation emits more than half of nitrogen oxides in our air, and is a major source of global warming emissions in the US. ;Studies have linked pollutants from vehicle exhaust to adverse impacts on nearly every organ system in the body.</p>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Services",
  data() {
    return {
      fields: [],
      isLoading: false
    };
  },
  methods: {
    getPollutants() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`pollutants`).then(response => {
        self.fields = response.data.data;
        self.isLoading = false;
      });
    }
  },
  mounted() {
    this.getPollutants();
  }
};
</script>
<style scoped>
.wrapper {
  background-color: #f2f3f5;
}
.box {
  border-radius: 50px 50px 0 50px;
  /*border: 1px solid grey;*/
  padding: 20px;
  background-color: white;
  margin-bottom: 30px;
  position: relative;
}
.box:hover::after {
  width: 100%;
  height: 100%;
  /*background-color: var(--v-primary-base);*/
  color: white;
  transition: all 0.3s ease-in-out 0s;
}
.box::after {
  background: #28a9e2;
  width: 0;
  height: 0;
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 50px 50px 0 50px;
  transition: all 0.3s ease-in-out 0s;
  z-index: 0;
}
.box h3 {
  font-weight: 600;
  position: relative;
  z-index: 1;
}
.box:hover h3 {
  color: #fff;
  transition: all 0.3s ease-in-out 0s;
}
.box p {
  position: relative;
  z-index: 1;
}
.box:hover p {
  color: #fff;
  /*transition: all 0.3s ease-in-out 0s;*/
}
</style>