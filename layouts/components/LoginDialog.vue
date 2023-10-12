<script setup lang="ts">
import { useUser } from "~/store/useUser";
import { useLoginDialog } from "~/store/useLoginDialog";

const username = ref<string>("yexue");
const password = ref<string>("1994");
const { closeDialog } = useLoginDialog();
async function tryLogin() {
  const user = useUser();
  const isLogin = await user.doLogin(username.value, password.value);
  if (isLogin) {
    ElMessage.success("登陆成功");
    closeDialog();
    return;
  }
  ElMessage.error("登陆失败");
}
</script>

<template>
  <div
    class="top-0 left-0 w-screen h-screen absolute z-30 flex justify-center items-center"
  >
    <div class="-z-1 absolute opacity-90 bg-gray-500 w-full h-full"></div>
    <div
      class="w-[440px] h-[440px] bg-white relative flex shadow-2xl rounded-xl min-w-[440px]"
    >
      <div
        @click="closeDialog"
        class="absolute right-2 top-4 w-4 h-3 text-gray-400 cursor-pointer"
      >
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ea893728=""
        >
          <path
            fill="currentColor"
            d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
          ></path>
        </svg>
      </div>
      <div
        class="relative mt-10 flex-col bottom-0 h-[400px] flex items-center w-full justify-around"
      >
        <div class="text-xl">账号登陆</div>
        <div class="text-center flex flex-col space-y-4">
          <input
            type="text"
            v-model="username"
            placeholder="请输入账号"
            class="bg-gray-100 w-72 rounded-lg h-12 p-4"
          />
          <input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            class="bg-gray-100 w-72 rounded-lg h-12 p-4"
          />
        </div>
        <button
          :disabled="!(username !== '' && password != '')"
          class="disabled:opacity-30 bg-blue-600 text-white w-80 h-12 rounded-lg mb-16"
          @click="tryLogin"
        >
          登陆
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
