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
  <section class="w-full h-100dvh pt-10 pb-25 flex flex-col gap-5 items-center border-1 border-solid border-#FFD79B">
    <h2>index.vue</h2>
  </section>
</template>
