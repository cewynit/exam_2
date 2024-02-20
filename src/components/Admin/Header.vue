<template>
  <v-app-bar :elevation="0" rounded scroll-behavior="elevate">
    <v-app-bar-title class="font-weight-bold ma-8 text-h5">{{$store.state.title }}</v-app-bar-title>
    <template v-slot:append>
      <v-badge content="6" color="red" class="ma-4">
        <v-icon icon="mdi-bell-outline"></v-icon>
      </v-badge>
      <div style="position: relative; height: auto" class="mr-5">
        <v-avatar>
          <v-img class="mx-auto my-6" max-width="100" src="@/assets/img/meo.jpg"></v-img>
        </v-avatar>
        <v-badge dot color="green" style="position: absolute; bottom: 8px"></v-badge>
      </div>
    </template>
  </v-app-bar>
</template>
    
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      userInfo: {
        avatar:"",
        name: "Pham Quang Hip",
        email: "quanghiep2k2@gmail.com"
      },
      menu: false
    };
  }
};
</script>
     