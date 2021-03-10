<template>
  <div style="margin-top: 100px">
    <v-container>
      <h2 style="text-align: center">Categories</h2>
      <v-row>
        <v-col sm="12" md="4">
          <div class="service-card service-ghape">
            <h3>02</h3>
            <h4>wordpress customize</h4>
            <p>
              Also have dynamic website development experience with wordpress
              based solutions, wordpress plugins.
            </p>
          </div>
        </v-col>
        <v-col sm="12" md="4">
          <div class="service-card service-ghape">
            <h3>02</h3>
            <h4>wordpress customize</h4>
            <p>
              Also have dynamic website development experience with wordpress
              based solutions, wordpress plugins.
            </p>
          </div>
        </v-col>
        <v-col sm="12" md="4">
          <div class="service-card service-ghape">
            <h3>02</h3>
            <h4>wordpress customize</h4>
            <p>
              Also have dynamic website development experience with wordpress
              based solutions, wordpress plugins.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.service-ghape {
  margin-top: -80px;
}
.service-card {
  margin-bottom: 30px;
  background: #ffffff;
  text-align: center;
  padding: 60px 40px 65px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 45px 0px rgb(0 0 0 / 15%);
  box-shadow: 0px 0px 45px 0px rgb(0 0 0 / 15%);
  position: relative;
  z-index: 1;
  transition: all linear 0.3s;
  -webkit-transition: all linear 0.3s;
  -moz-transition: all linear 0.3s;
  -ms-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
}

.service-card h3 {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  position: absolute;
  top: 5px;
  right: 5px;
}
.service-card h4 {
  color: #48455a;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 35px;
  transition: all linear 0.3s;
  -webkit-transition: all linear 0.3s;
}
.service-card p {
  transition: all linear 0.3s;
  -webkit-transition: all linear 0.3s;
}
.service-card::after {
  position: absolute;
  content: "";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #fe6347;
  -webkit-clip-path: circle(20% at 100% 0%);
  clip-path: circle(20% at 100% 0%);
  z-index: -1;
  transition: all linear 0.3s;
  -webkit-transition: all linear 0.3s;
  -moz-transition: all linear 0.3s;
  -ms-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
}
.service-card:hover {
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
}
.service-card:hover::after {
  -webkit-clip-path: circle(75%);
  clip-path: circle(75%);
}
.service-card:hover h4,
.service-card:hover p {
  color: #ffffff;
}
</style>
