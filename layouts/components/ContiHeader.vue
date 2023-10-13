<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useToken } from "~/store/useToken";
import { useUser } from "~/store/useUser";
import { useLoginDialog } from "~/store/useLoginDialog";
const isLogin = ref(false);
function logout() {
  const { doLogout } = useUser();
  doLogout();
}
const { openDialog } = useLoginDialog();
const handleCommand = (command: string) => {
  useRouter().push({ path: command });
};
//dsgds
watchEffect(() => {
  isLogin.value = !!useToken().getToken().value;
});
//检查是否登陆
</script>

<template>
  <div
    class="flex top-0 z-0 left-0 bg-no-repeat bg-top min-w-[1240px] bg-[url('/img/header-bg.png')] bg-[#1e90ff] w-screen h-[340px] absolute"
  ></div>
  <div
    class="relative mt-4 mx-auto w-[1180px] justify-between flex z-0 h-[40px]"
  >
    <div class="text-2xl text-[#fff]">继续教育</div>
    <div
      v-if="!isLogin"
      class="text-white text-[14px] cursor-pointer"
      @click="openDialog"
    >
      登陆
    </div>
    <el-dropdown v-else @command="handleCommand">
      <div
        class="bg-[url('/img/head.png')] bg-no-repeat w-10 h-10 bg-cover rounded-3xl"
      ></div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="/">主页 </el-dropdown-item>
          <el-dropdown-item command="/user/999">个人信息 </el-dropdown-item>
          <el-dropdown-item command="/order/">全部订单</el-dropdown-item>
          <el-dropdown-item>成果转换申报</el-dropdown-item>
          <el-dropdown-item>证书管理</el-dropdown-item>
          <el-dropdown-item command="/" divided @click="logout"
            >登出</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped></style>
