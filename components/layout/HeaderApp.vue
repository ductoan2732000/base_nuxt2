<template>
  <el-header>
    <el-row>
      <el-col :span="24">
        <a class="app-logo">
          <img src="~assets/img/logo.svg" alt="Login center" />
        </a>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeaderApp',
  setup() {},
})
</script>
