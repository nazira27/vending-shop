<template>
  <div>
    <Header></Header>
    <Banner id="banner"></Banner>
    <Categories id="categories" />
    <Shops id="shops" />
    <Services id="faq"></Services>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/LandingPage/Header";
import Banner from "@/components/LandingPage/Banner";
import Categories from "@/components/LandingPage/Categories";
import Shops from "@/components/LandingPage/Shops";
import Services from "@/components/LandingPage/Services";
import Footer from "@/components/LandingPage/Footer";
export default {
  name: "Landing",
  components: {
    Header,
    Banner,
    Categories,
    Shops,
    Services,
    Footer,
  },
};
</script>
