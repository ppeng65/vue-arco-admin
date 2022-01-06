<template>
  <div class="login-container">
    <a-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <a-form-item field="username">
        <span class="svg-container">
          <icon-user />
        </span>
        <a-input
          v-model="loginForm.username"
          type="text"
          placeholder="username"
        />
      </a-form-item>
      <a-form-item field="password">
        <span class="svg-container">
          <icon-lock />
        </span>
        <a-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="password"
        />
        <span class="show-pwd">
          <span class="svg-container" @click="onChangePwdType">
            <icon-eye-invisible />
          </span>
        </span>
      </a-form-item>
      <a-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handleLogin"
        size="large"
      >
        登录
      </a-button>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
const loginRules = ref({
  username: [{ required: true, trigger: 'blur', message: '用户名为必填项' }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword() }]
})

const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const loginFormRef = ref(null)
const loading = ref(false)
const store = useStore()
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) return
    loading.value = true
    store.dispatch('user/login', loginForm.value)
  })
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  width: 100%;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px;
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      font-size: 18px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }

    ::v-deep .arco-form-item-label-col {
      display: none;
    }

    ::v-deep .arco-form-item-wrapper-col {
      position: relative;
      flex: 1;
      .arco-form-item-content {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #454545;
        background-color: rgba(0, 0, 0, 0.1);

        .arco-input-wrapper {
          display: inline-block;
          width: 85%;
          height: 47px;
          border: none;
          background-color: transparent;

          input {
            padding: 12px 5px 12px 15px;
            border: none;
            border-radius: 0;
            color: $light_gray;
            background-color: transparent;
          }
        }
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 9px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
