<template>
  <v-footer dark padless>
    <v-card flat tile class="card white--text text-center">
      <v-row>
        <v-col class="text-center" sm="12" md="12" lg="12">
          <span>VendingShop</span>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Shops</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p class="text my-5">TUIT - 310-19 - 311-19</p>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.card {
  width: 100%;
  align-items: center;
}
.image {
  margin: 5px auto;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
}
li a {
  text-decoration: none;
  font-size: 15px;
  margin: 5px;
  text-transform: uppercase;
  color: #999;
}
.text {
  color: #999;
}
.text a {
  text-decoration: none;
  color: white;
}
</style>
