<template>
  <div style="padding-top: 50px; background-color: #f7f7f7">
    <v-container>
      <h1 style="text-align: center" class="mb-6 display-2">Categories</h1>
      <v-row>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="3">
          <div class="category-item">
            <a
              href="#"
              class="category-image"
              style="background-image: url('https://files.glotr.uz/category/000/000/004/2020-01-06-15-47-32-337434-7de771cd3b34c7700779842ab5021f99.jpg?_=ozauc') "
            ></a>
            <div class="category-title">
              <a>Baliqlar</a>
            </div>
          </div>
        </v-col>
      </v-row>
      <!--      <v-row>-->
      <!--        <v-col sm="12" md="4">-->
      <!--          <div class="service-card service-ghape">-->
      <!--            <h3>02</h3>-->
      <!--            <h4>wordpress customize</h4>-->
      <!--            <p>-->
      <!--              Also have dynamic website development experience with wordpress-->
      <!--              based solutions, wordpress plugins.-->
      <!--            </p>-->
      <!--          </div>-->
      <!--        </v-col>-->
      <!--        <v-col sm="12" md="4">-->
      <!--          <div class="service-card service-ghape">-->
      <!--            <h3>02</h3>-->
      <!--            <h4>wordpress customize</h4>-->
      <!--            <p>-->
      <!--              Also have dynamic website development experience with wordpress-->
      <!--              based solutions, wordpress plugins.-->
      <!--            </p>-->
      <!--          </div>-->
      <!--        </v-col>-->
      <!--        <v-col sm="12" md="4">-->
      <!--          <div class="service-card service-ghape">-->
      <!--            <h3>02</h3>-->
      <!--            <h4>wordpress customize</h4>-->
      <!--            <p>-->
      <!--              Also have dynamic website development experience with wordpress-->
      <!--              based solutions, wordpress plugins.-->
      <!--            </p>-->
      <!--          </div>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
    </v-container>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  methods: {
    loadData() {
      const baseURI = "https://vending-shop.herokuapp.com/api/category";
      // axios.get('vending-shop.herokuapp.com/api/category').then(response => {
      this.$http
        .get(baseURI, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxOTc2NDA3MX0.pkTdrxZId9TAUDRaYIf6hbInL8W9hdzSs79p6pFIZZoWh-sj0VSy5TZjiIqSi08QkIDW3xFRZ61NnY3gtpkwQQ",
          },
        })
        .then((response) => {
          console.log(response, "djsjdfhs");
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.category-item:hover {
  box-shadow: 0px 0px 30px 0px rgb(5 8 9 / 20%);
}
.category-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 30px 0px rgb(5 8 9 / 5%);
  padding: 10px 10px 0 10px;
  transition: 0.2s ease-in-out;
}
.category-title {
  padding: 15px 0;
  line-height: 1.1;
}
.category-title a {
  text-align: center;
  font-family: "FuturaMediumC", sans-serif;
  font-size: 16px;
  display: inline-block;
  width: 100%;
  padding: 0 10px;
}
.category-image {
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  background-size: contain;
  height: 250px;
}

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
