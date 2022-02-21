<template>
  <section>
    <Header />
    <router-view />
  </section>
</template>
<script>
import Header from "./components/header.vue";
export default {
  components: { Header },
 
};
</script>
<style>
body {
  margin: 0;
}
</style>
