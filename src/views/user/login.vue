<template>
  <div class="login-wraper">
    <div class="login-head">
      <h1>登录</h1>
    </div>
    <div class="login-body">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formState.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="formState.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="p15">
          <van-space direction="vertical" fill>
            <van-button round block type="primary" native-type="submit"
              >提交</van-button
            >
            <van-button round block native-type="submit">注册</van-button>
          </van-space>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserManageType } from "../../interface/model/user";
import { useUserSerivice } from "../../api/user";
export default defineComponent({
  name: "UserLogin",
  props: {},
  setup() {
    const userSerivice = useUserSerivice();
    const state = {
      formState: ref<UserManageType.UserLoginFormState>(
        new UserManageType.UserLoginFormState()
      ),
    };
    const onSubmit = async () => {
      const result = await userSerivice.login(state.formState.value);
      console.log(result);
    };
    return {
      ...state,
      onSubmit,
    };
  },
});
</script>

<style lang="less">
.login-wraper {
  padding-top: 15%;
  box-sizing: border-box;
  & > .login-head {
    text-align: center;
    line-height: 35px;
  }
  & > .login-body {
    margin-top: 15%;
  }
}
</style>
