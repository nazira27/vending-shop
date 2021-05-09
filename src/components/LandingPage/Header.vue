<template>
  <div :class="{ fixed: isFixed }">
    <v-app-bar
      class="navbar fixed elevation-0"
      color="transparent"
      height="90"
      dense
    >
      <div>
        <router-link :to="{ name: 'home' }">
          <!-- <v-img
            class="mx-10 my-2"
            src="@/assets/logo-conference.png"
            height="81"
          >
          </v-img> -->
          <span style="font-family: cursive;">VendingShop</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <li>
          <a @click="handleClick" class="nav" v-scroll-to="'#banner'" href="#"
            >Home</a
          >
          <a
            @click="handleClick"
            class="nav"
            v-scroll-to="'#categories'"
            href="#"
            >Categories</a
          >
          <a @click="handleClick" class="nav" v-scroll-to="'#shops'" href="#"
            >Shops</a
          >
          <a class="nav" @click="handleClick" v-scroll-to="'#faq'" href="#"
            >FAQ</a
          >
          <router-link to="/">Login in</router-link>
        </li>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
      isFixed: false,
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

      if (window.scrollY > 300) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    handleClick(e) {
      $(".title a").removeClass("active");
      $(e.target).addClass("active");
      console.log(e.target);
    },
    menuItems() {
      return this.menu;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  /*color: #323232;*/
}

.navbar {
  background: transparent;
  align-items: center;
  position: fixed;
  z-index: 1000;
}

.fixed .navbar {
  position: fixed;
  z-index: 10000;
}

.fixed .navbar {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
  background-color: #fff !important;
}

/*.nav:after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: var(--v-secondary-base);
    margin-top: 3px;

}*/
/*.nav:hover:after{
    width: 100%;
    background: var(--v-secondary-base);
    transition: width .3s ease
}*/
/*.active:after {
    width: 100%;
    background: var(--v-secondary-base);
}*/
li {
  display: inherit;
  margin-right: 10px;
  margin-left: 10px;
}

.navbar a {
  font-size: 18px;
  color: white;
  margin: auto 10px;
}

.fixed .navbar a {
  color: var(--v-primary-base);
}
</style>
