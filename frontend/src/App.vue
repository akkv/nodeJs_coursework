<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
</style>
