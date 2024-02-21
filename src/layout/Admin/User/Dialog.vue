<template>
    <v-dialog max-width="500px">
      <v-card class="rounded-card">
        <v-card-title style="font-weight: bold;">
          <h4>Tạo mới</h4>
        </v-card-title>
        <v-container style="background-color: rgb(247, 247, 247);">
          <v-row>
            <v-col cols="12" style="font-size: 13px;">
              <span>Tên người dùng</span> <span class="text-blue ml-2">*</span>
              <v-text-field placeholder="Nhập tên người dùng" style="background-color: white;" density="compact" single-line
                hide-details variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Email</span><span class="text-blue ml-2">*</span>
              <v-text-field placeholder="Nhập email người dùng" style="background-color: white;" density="compact"
                single-line hide-details variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Ngày sinh</span><span class="text-blue ml-2">*</span>
              <v-text-field v-model="birthDate" type="date" placeholder="YYYY/MM/DD" :rules="dateRules"
                :format="dateFormatter"
                style="background-color: white;"
                density="compact"
                single-line
                hide-details
                variant="outlined"
                ></v-text-field>
            </v-col>

            <v-col cols="12" style="font-size: 13px;">
              <span>Số điện thoại</span><span class="text-blue ml-2">*</span>
              <v-text-field placeholder="Nhập số điện thoại người dùng" style="background-color: white;" density="compact"
                single-line hide-details variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Avatar</span><span class="text-blue ml-2">*</span>
              <v-text-field placeholder="Nhập link ảnh avatar" style="background-color: white;" density="compact"
                single-line hide-details variant="outlined"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions class="pr-4">
          <v-spacer></v-spacer>
          <v-btn @click="close" class="text-capitalize cancel-button">Hủy</v-btn>
          <v-btn class="text-capitalize" variant="elevated" color="#0F60FF">Tạo<span
              class="text-lowercase">mới</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  <script>
  export default {
    name: 'DialogUser',
    props: ['dialog'],
    birthDate: null,
        dateRules: [
          (v) => !!v || 'Ngày sinh là trường bắt buộc',
        ],
    computed: {
      ShowDialog: {
        get() {
          return this.dialog;
        },
        set(value) {
          if (!value) {
            this.$emit('close');
          }
        }
      }
    },
    
  }
  </script>
  <style scoped>
  .rounded-card {
    border-radius: 12px;
  }
  
  .cancel-button {
    border: 1px solid #dddee2;
    /* Màu viền của nút Hủy */
    color: #0f0f0f;
    /* Màu chữ của nút Hủy */
  }
  
  .create-button {
    /* Cấu hình màu và các thuộc tính khác cho nút Tạo mới */
    color: #fff;
    /* Màu chữ của nút Tạo mới */
    background-color: #0F60FF;
    /* Màu nền của nút Tạo mới */
    border: none;
    /* Không có viền */
  }
  </style>