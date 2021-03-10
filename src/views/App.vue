<template>
  <v-app>
    <AppBar />
    <Drawer />
    <Rout />
  </v-app>
</template>

<script>
import AppBar from "@/components/App/AppBar";
import Drawer from "@/components/App/Drawer";
import Rout from "@/components/App/Rout";
export default {
  name: "Home",

  components: { AppBar, Drawer, Rout },
  mounted(){
    if(!window.localStorage.getItem('token')){
      this.redirect("login")
    }
  }
};
</script>
<style lang="scss">
</style>
