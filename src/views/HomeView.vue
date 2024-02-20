<template>
  <div>
    <CategoryList />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: "HomeView",
  components: {
    CategoryList,
    Footer
  }
};
</script>

<style>
</style>