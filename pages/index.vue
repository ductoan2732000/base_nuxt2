<template>
  <el-row class="app-main">
    <el-col :span="5">
      <span class="form-title">Login Center</span>
      <div class="form-user">
        <span>Username</span>
        <el-input v-model="formLogin.user" clearable></el-input>
      </div>
      <div class="form-password">
        <span>Password</span>
        <el-input v-model="formLogin.password" show-password></el-input>
      </div>
      <div class="form-checkbox">
        <el-checkbox v-model="formLogin.rememberMe">Remember me</el-checkbox>
      </div>
      <el-button type="primary" class="btn-login" @click="login"
        >Login</el-button
      >
      <div class="login-google">
        <span>External login</span>
        <el-button type="danger" icon="el-icon-eleme" class="btn-login"
          >Continue with Google</el-button
        >
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { useLogin } from '~/composables/login'
export default defineComponent({
  name: 'Login',
  layout: 'app',
  setup() {
    const { login } = useLogin()
    const formLogin = reactive({
      user: '',
      password: '',
      rememberMe: false,
    })
    return {
      formLogin,
      login,
    }
  },
})
</script>
