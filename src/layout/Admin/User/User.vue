<template>
  <div>
    <v-row class="mt-3">
      <v-text-field
        style="background-color: white"
        density="compact"
        variant="outlined"
        label="Tìm kiếm"
        append-inner-icon="mdi mdi-magnify"
        single-line
        hide-details
        class="mr-2 elevation-2"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="(dialog = true), (currentData = '')">
        Tạo Mới
        <v-icon>mdi mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th class="text-center">Avatar</th>
                <th class="text-center">Tên Người Dùng</th>
                <th class="text-center">Email</th>
                <th class="text-center">Ngày Sinh</th>
                <th class="text-center">Số Điện Thoại</th>
                <th class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datas" :key="index">
                <td class="text-center">
                  <v-img
                    src="@/assets/img/meo.jpg"
                    style="
                      width: 36px;
                      height: 36px;
                      margin: 0 auto;
                      display: block;
                    "
                  />
                </td>
                <td class="text-center">{{ item.TenNguoiDung }}</td>
                <td class="text-center">{{ item.EmailKH }}</td>
                <td class="text-center">{{ item.NgaySinh }}</td>
                <td class="text-center">{{ item.SoDienThoai }}</td>
                <td class="text-center">
                  <v-btn icon color size="small" @click="(dialog = true), (currentData = item)">
                    <v-icon style="width: 24px;hight:24px">mdi mdi-pencil-box-outline</v-icon>
                  </v-btn>
                  <v-btn icon color size="small">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row class="ma-2">
            <v-col cols="8">
              <v-row>
                <p class="mt-5 opacity">Showing</p>
                <v-col cols="2">
                  <v-select
                    density="compact"
                    :items="['10', '20', '25', '30', 'All']"
                    variant="outlined"
                  ></v-select>
                </v-col>
                <p class="mt-5 opacity">of 50</p>
              </v-row>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-pagination variant="text" density="compact" :length="5"></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
              
      <script>
export default {
  name: "UserView",
  data: () => ({
    datas: [
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      },
      {
        AnhBaiViet: "@/assets/img/meo.jpg",
        TenNguoiDung: "Cew",
        EmailKH: "Quanghip2k2@gmail.com",
        NgaySinh: "08/01/2002",
        SoDienThoai: "0865836832"
      }
    ],
    currentPage: 1,
    itemsPerPage: 5
  })
};
</script>  
      <style></style>