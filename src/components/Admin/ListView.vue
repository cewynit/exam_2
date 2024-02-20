<template>
  <v-navigation-drawer>
    <v-toolbar style="background-color: white">
      <v-row>
        <v-col cols="9">
          <v-img 
            src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1705460127/logo1_adshdl.png"
          ></v-img>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-icon>mdi-backburger</v-icon>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-list>
      <v-list-subheader>Quản lý sản phẩm</v-list-subheader>
      <v-list-item
        v-for="(item, i) in links"
        :key="i"
        :to="item.link"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
<script>
export default {
  name: "ListView",
  data() {
    return {
      links: [
        { icon: " mdi-newspaper", text: "Sản phẩm", link: "/admin/Category" },
        { icon: "mdi-account-multiple", text: "User", link: "/admin/User" },
      ],
    };
  },
};
</script>
  
<style scoped>
/* Các quy tắc CSS scoped nếu cần thiết */
</style>