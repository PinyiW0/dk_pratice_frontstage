<script lang="ts" setup>
/* tab */
const defaultTab = ref<number>(1);
const tabList: any[] = [
  { label: '選擇場地', value: 1 },
  { label: '預約時間', value: 2 },
  { label: '完成', value: 3 },
];
</script>

<template>
  <secton class="w-full bg-white flex flex-col items-center justify-center border-1 border-solid border-#FFD79B">
    <div class=" md:w-[calc(100%-160px)] xl:w-[calc(100%-320px)] p-5 flex flex-col items-center justify-center">
      <PageTitle label="我是text.vue" />
      <!-- <Tab v-model="defaultTab" :list="tabList" /> -->
      <NuxtPage />
    </div>
  </secton>
</template>