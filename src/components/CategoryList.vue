<template>
  <div class="py-8 px-4">
    <v-row>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select
          v-model="SortCategory"
          density="compact"
          label="Name"
          :items="['All']"
          variant="outlined"
          @change="applyFilters"
        ></v-select>
      </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select
          v-model="SortPrice"
          label="Price"
          density="compact"
          :items="['Price ↑', 'Price ↓']"
          variant="outlined"
          @change="applyFilters"
        ></v-select>
      </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select
          v-model="SortAnotherPrice"
          label="Price"
          density="compact"
          :items="['Err']"
          variant="outlined"
          @change="applyFilters"
        ></v-select>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="5">
        <v-row>
          <v-btn
            href="login"
            class="text-capitalize mt-3"
            variant="text"
            size="large"
            style="background-color: #e7e3e3"
          >Show all</v-btn>
          <v-btn
            href="admin"
            class="text-capitalize mt-3"
            elevation="2"
            size="large"
            style="color: #2264D1"
          >Auction</v-btn>
          <v-btn
            class="text-capitalize mt-3"
            variant="text"
            size="large"
            style="background-color: #e7e3e3"
          >Buy now</v-btn>
          <v-spacer></v-spacer>

          <v-btn
            class="mt-3"
            variant="text"
            size="large"
            style="background-color: #e7e3e3"
            @click="toggleList"
          >
            <div>
              <v-icon icon="mdi-menu"></v-icon>
              <v-list
                v-if="showList"
                border
                class="mx-auto text-left"
                max-width="356px"
                style="position: absolute; top: 100%; z-index:1;right:0;width:256px;"
              >
                <v-list-item
                  link
                  prepend-icon="mdi-inbox-arrow-down"
                  title="Inbox"
                  href="https://mail.google.com/mail/u/1/#inbox"
                >
                  <template v-slot:append>
                    <v-badge color="error" content="6" inline></v-badge>
                  </template>
                </v-list-item>

                <v-list-item
                  link
                  prepend-icon="mdi-send"
                  title="Sent Mail"
                  href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                ></v-list-item>

                <v-list-item
                  link
                  prepend-icon="mdi-delete"
                  title="Trash"
                  href="https://mail.google.com/mail/u/1/#trash"
                >
                  <template v-slot:append>
                    <v-badge color="info" content="12" inline></v-badge>
                  </template>
                </v-list-item>
                <v-list-item
                  link
                  prepend-icon="mdi-alert-circle"
                  title="Spam"
                  href="https://mail.google.com/mail/u/1/#spam"
                ></v-list-item>
              </v-list>
            </div>
          </v-btn>

          <v-btn class="mt-3" size="large" style="color: #2264d1">
            <v-icon icon="mdi-microsoft-windows"></v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <div class="d-flex justify-center ga-2">
        <v-chip variant="while" style="font-weight: bold;">Related</v-chip>

        <v-chip color="while" style="font-size: 14px">worldwide shipping</v-chip>

        <v-chip color="while" style="font-size: 14px">under $50</v-chip>

        <v-chip color="while" style="font-size: 14px">kitten</v-chip>

        <v-chip color="while" style="font-size: 14px">plastic plugs</v-chip>

        <v-chip color="while" style="font-size: 14px">pucker shoes</v-chip>

        <v-chip color="while" style="font-size: 14px">vintage typewriter</v-chip>
      </div>
    </v-row>
  </div>
  <div>
    <v-row style="padding-left:50px;">
      <v-col cols="12" sm="3" v-for="(mayanhs, i) in Mayanhs" :key="i">
        <v-card height="472px" width="258px" align="center" variant="flat" hover>
          <v-img
            :src="mayanhs.image"
            width="227px"
            height="224px"
            contain
            class="flex-grow-1"
            style="object-fit: cover"
          ></v-img>
          <v-card-text
            class="mt-n4 text-left"
            style="font-size: 16px; color: #19191d"
            height="226px"
            with="74px"
          >{{ mayanhs.title }}</v-card-text>
          <v-card-text class="mt-n2 text-left" height="226px" width="36px">
            <v-row>
              <v-col cols="6">
                <v-card-item>
                  <strong style="font-size: 18px">${{ mayanhs.price }}</strong>
                </v-card-item>
              </v-col>
              <v-col cols="6">
                <v-card-item>
                  <v-img :src="mayanhs.hiep"></v-img>
                </v-card-item>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text
            class="mt-n4 text-left"
            style="font-size: 14px; color: #787885"
            height="226px"
            width="21px"
          >{{ mayanhs.reviews }}</v-card-text>

          <v-card-actions>
            <v-rating
              half-increments
              hover
              readonly
              model-value="4.5"
              :size="20"
              color="yellow-darken-3"
              class="mb-1 mr-3"
            ></v-rating>4.5
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-heart-outline"
              variant="outlined"
              class="text-capitalize"
              color="primary"
            >Watch</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TrangChu",
  data() {
    return {
      showList: false,
      SortCategory: "All",
      SortPrice: "",
      filteredMayanhs: [
        {
          image:
            "https://media.istockphoto.com/id/147873072/photo/old-typewriter-with-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=IMiimim9fpX5d1jl2YcoVz7c2c5PzLm_wTqx__uzbvk=",
          title:
            "Vintage Typewriter to post awesome stories about UI design and webdev.",
          price: "45.59",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://5.imimg.com/data5/ST/BI/HC/ANDROID-728498/product-jpeg-500x500.jpg",
          title:
            "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
          price: "13.95",
          reviews: "1258 bids, 359 watchers /r $5.95 for shipping"
        },
        {
          image: "https://thumbs.dreamstime.com/b/cat-milk-1080079.jpg",
          title:
            "Timesaving kitten to save months on development. Playful, cute, cheap!",
          price: "128.99",
          reviews:
            "Eligible for nothing :( Eligible for nothing :( Eligible for nothing :("
        },
        {
          image:
            "https://livingetc.com.au/wp-content/uploads/Ribbed-candle-holder-ochre.jpg",
          title:
            "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
          price: "12.48",
          hiep:
            "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/422645622_151360698070473_6110360314931683548_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=YqILnhl97xgAX85pl5r&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSF9utHNdVmpb41BI2qO1doc-RPcCT8FPmxFea_NUktqw&oe=65D9A4F0",
          reviews: "Wordwide shitting available Buyers protection possible!"
        },
        {
          image: "https://img.thewhiskyexchange.com/900/soft_cha1.jpg",
          title:
            "Creativity stimulating lotion. Drink every morning to generate better ideas!",
          price: "12.48",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwb9e1d546/images/finished-goods/products/1XPX2269/Cozy-Snowman-and-Flurries-Boxed-Christmas-Cards_1XPX2269_07.jpg?sw=1920",
          title:
            "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
          price: "128.99",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%206.png?raw=true",
          title:
            "Timesaving kitten to save months on development. Playful, cute, cheap!",
          price: "13.95",
          reviews: "1258 bids, 359 watchers $5.95 for shipping"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%207.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "9.50",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.UfqlZWiQZb1AWbhRpHJ3PAAAAA?w=400&h=400&rs=1&pid=ImgDetMain",
          title:
            "Professional teadrinking set for every designer and developer",
          price: "45.59",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.SVzWjvLddjvbfkEDJdGFCQHaLE?w=665&h=994&rs=1&pid=ImgDetMain",
          title:
            "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
          price: "11.68",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%2010.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "1.25",
          hiep:
            "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/418381248_1023379472081837_538361188996784195_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=YDytElM5CCUAX_qUZx1&_nc_ht=scontent.fhan17-1.fna&oh=03_AdTHzA48gVylcTJZKT6Y6c_2bwaqB9Pu5z1dfcSrUfE6FQ&oe=65D99AAD",
          reviews: " Eligible for Shipping To Mars or somewhere else  else"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%2011.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "23.25",
          reviews: "KISTOCHKI & KRASIBO. Top cosmetics Chelyabinsk is here!"
        }
      ],
      Mayanhs: []
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    filterLoaiSanPham(value) {
      if (value === "All") {
        this.Mayanhs = this.filteredMayanhs;
        return;
      }
      this.Mayanhs = this.filteredMayanhs.filter(item =>
        item.title.includes(value)
      );
    },
    filterPrice() {
      let filtered = [...this.Mayanhs];

      if (this.SortPrice === "Price ↑") {
        this.Mayanhs = filtered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else {
        this.Mayanhs = filtered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
    }
  },
  watch: {
    SortCategory(newval) {
      // alert(OldVal+"   "+newval)
      this.filterLoaiSanPham(newval);
    },
    SortPrice(newval) {
      // alert(OldVal+"   "+newval)
      this.filterPrice(newval);
    }
  },
  created() {
    this.Mayanhs = this.filteredMayanhs;
  }
};
</script>