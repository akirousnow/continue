<script setup lang="ts">
import { useLoginDialog } from "~/store/useLoginDialog";
import { ref, watchEffect } from "vue";
import { useToken } from "~/store/useToken";

interface Student {
  class_id: string;
  student_id: string;
  name: string;
  contact_info: string;
  user_type: "非学历教育学员" | "学历教育学员";
}
const { openDialog, isOpen } = useLoginDialog();

const student: Student = {
  class_id: "21",
  student_id: "20220104134",
  name: "夜雪",
  contact_info: "18024879509",
  user_type: "非学历教育学员",
};
const isLogin = ref(false);
watchEffect(() => {
  isLogin.value = !!useToken().getToken().value;
});
</script>

<template>
  <div class="w-full h-[320px] space-x-60 flex">
    <div class="w-[733px] rounded-2xl shadow-lg bg-white h-full"></div>

    <div
      class="bg-white rounded-2xl shadow-lg h-full w-[333px] flex flex-col items-center space-y-32"
    >
      <button
        v-if="!isLogin"
        class="h-10 bg-[#1e90ff] w-44 rounded-xl text-white text-lg font-bold"
        @click="openDialog"
      >
        登陆/注册
      </button>
    </div>
  </div>
</template>

<style scoped></style>
