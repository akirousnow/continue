<script setup lang="ts">
const props = defineProps(["title", "author", "imgSrc"]);
</script>

<template>
  <a href="">
    <div
      class="card flex flex-col cursor-pointer rounded-xl bg-white w-[224px] h-[260px] hover:shadow-2xl"
    >
      <img
        class="bg-cover rounded-xl pointer-events-none bg-center"
        :src="imgSrc"
        alt=""
      />
      <div class="m-4">
        <p class="font-bold text-[16px]">{{ title }}</p>
        <p class="mt-2 text-[12px] text-[#666]">{{ author }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  -webkit-transition: all ease-in 0.2s;
  transition: all ease-in 0.2s;
}
</style>
