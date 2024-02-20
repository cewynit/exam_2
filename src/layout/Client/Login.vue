<template>
    <div>
        <v-card class="mx-auto pa-12 pb-8 my-6" variant="flat" max-width="500" rounded="lg">
            <v-img class="mx-auto my-6" max-width="100"
                src="https://tse4.mm.bing.net/th?id=OIP.fv5DeUz-OmV84NOdioiodgHaEc&pid=Api&P=0&h=220"></v-img>
            <div class="text-h4 text-center">
                Đăng nhập
            </div>
            <v-form @submit.prevent="login">
                <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                <v-text-field v-model="email" type="email" :error-messages="emailError" required density="compact"
                    placeholder="Nhập email" variant="outlined"></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Mật khẩu
                </div>
                <v-text-field v-model="password" :error-messages="passwordError" required
                    :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Nhập mật khẩu" variant="outlined"
                    @click:append-inner="visible = !visible" :append-icon-size="15"></v-text-field>
                <div class="d-flex justify-space-between align-center">
                    <v-checkbox v-model="terms" color="secondary" label="Ghi nhớ Đăng nhập"></v-checkbox>
                    <a class="text-caption text-decoration-none text-blue mb-6" style="font-size: 14px;">
                        Quên mật khẩu?</a>
                </div>
                <v-btn type="submit" block class="mb-8" color="#0F60FF" size="large">
                    Đăng nhập
                </v-btn>
            </v-form>
            <div class="text-center">
                Bạn chưa có tài khoản ?
                <a class="text-decoration-none text-center" style="color:#0F60FF;">
                    Đăng ký ?
                </a>
            </div>
        </v-card>
    </div>
  </template>
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
      };
    },
  };
  </script>
  <script setup>
  import { useForm, useField } from 'vee-validate';
  import * as yup from 'yup';
  import { ref } from 'vue';
import axios from 'axios';
  
  const visible = ref(false)
  const terms = ref('')
  
  const { handleSubmit} = useForm();
  
  const { value: email, errorMessage: emailError } = useField(
    'email',
    yup.string().required("Không được bỏ trống").email("Email không phù hợp")
  );
  
  const { value: password, errorMessage: passwordError } = useField(
    'password',
    yup.string().required("Không được bỏ trống").min(6, "Mật Khẩu không định dạng").max(64,"Mật khẩu không vượt quá 64 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường và một số"
    ),
  );
  const login = handleSubmit(async () => {
    // alert(email.value+ "   "+password.value)
    // console.log('Logging in with:', email, password);
    const formData= new FormData();
    formData.append("email", email.value);
    formData.append("password", password.value);
    axios.post("http://localhost:3000/auth/login",formData,{
        headers:{
            "Content-Type":"application/json"
        }
    }).then(rs=>{
        console.log(rs);
        window.location.href='/admin'
    }).catch(error=>{
        console.log(error);
    })
  });
  
  </script>
  <style>
  </style>