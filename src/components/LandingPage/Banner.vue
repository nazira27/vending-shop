<template>
  <div class="banner">
    <v-carousel
      v-model="model"
      show-arrows-on-hover
      hide-delimiter-background
      cycle
      height="100vh"
    >
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
        src="~@/assets/banners/banner-1.jpg"
      >
        <v-container>
          <v-row align="center" justify="center">
            <div>
              <button class="btn">Register</button>
            </div>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
        src="~@/assets/banners/banner-2.webp"
      >
      </v-carousel-item>
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
        src="~@/assets/banners/banner-4.jpg"
      >
      </v-carousel-item>
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
        src="~@/assets/banners/banner-3.jpg"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data: () => ({
    model: 0,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>
<style lang="scss">
.vue-typer .custom.typed {
  color: white;
}
</style>
<style scoped>
.btn:hover {
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
.btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  background: #fff;
}
.btn {
  transition: color 0.5s ease 0s;
  min-height: 0px;
  min-width: 0px;
  line-height: 17px;
  border-width: 1px;
  margin: 4px;
  padding: 10px 24px;
  letter-spacing: 0px;
  font-size: 12px;
  background: red;
}

h1 {
  z-index: 10000;
}
p {
  z-index: 10000;
}
.banner >>> .v-image__image--cover {
  filter: brightness(0.5);
}
.banner {
  /* background-image: url("~@/assets/banner-01.jpg");
  -webkit-background-size: cover;
  background-size: cover; */
  color: white;
  /* height: 100%;
  width: 100%; */
  position: relative;
  background-repeat: no-repeat;
}
/* .banner:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 0;
  opacity: 0.6;
} */
.main {
  margin-top: 20%;
}
.banner:before {
  filter: brightness(0.5);
}
.text-center {
  text-align: center;
}
.started:hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.started::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2098d1;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.started:hover::before,
.started:focus::before,
.started:active::before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
h1 {
  color: white;
  font-weight: 700;
}
.cd-words-wrapper {
  display: inline-block;
  position: relative;
  text-align: left;
}
</style>
