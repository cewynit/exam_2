<template>
  <v-app>
    <ListView/>
    <Header />
    <v-main>
      <v-container class="py-3 px-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Header from "@/components/Admin/Header.vue";
import ListView from "@/components/Admin/ListView.vue";
export default {
  components: {
    Header,
    ListView,
  },
};
</script>

<style>
</style>