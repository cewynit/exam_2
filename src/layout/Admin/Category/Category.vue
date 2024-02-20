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
                <th class="text-center">STT</th>
                <th class="text-center">Tên Sản Phẩm</th>
                <th class="text-center">Giá</th>
                <th class="text-center">Số Lượng</th>
                <th class="text-center">Mô tả</th>
                <th class="text-center">Ảnh</th>
                <th class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datas" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ item.TenSanPham }}</td>
                <td class="text-center">{{ item.Gia }}</td>
                <td class="text-center">{{ item.SoLuong }}</td>
                <td class="text-center">{{ item.MoTa }}</td>
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
                <td class="text-center">
                  <v-btn icon color size="small" @click="(dialog = true), (currentData = item)">
                    <v-icon style="width: 12px;hight:12px">mdi mdi-pencil-box-outline</v-icon>
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
                <p class="mt-5 opacity" style="opacity: 0.5;">Showing</p>
                <v-col cols="2">
                  <v-select
                    density="compact"
                    :items="['10', '20', '25', '30', 'All']"
                    variant="outlined"
                  ></v-select>
                </v-col>
                <p class="mt-5 opacity" style="opacity: 0.5;">of 50</p>
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
  name: "CategoryView",

  data: () => ({
    datas: [
      {
        TenSanPham: "Sản Phẩm 1",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 2",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 3",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 4",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 5",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 6",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 7",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      },
      {
        TenSanPham: "Sản Phẩm 8",
        Gia: "$8888",
        SoLuong: 88,
        MoTa: "lorem5",
        AnhSanPham: "@/assets/img/meo.jpg"
      }
    ],
    currentPage: 1,
    itemsPerPage: 5
  })
};
</script>
    <style></style>