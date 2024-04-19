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
  <secton class="w-full white flex">
    <h2>index.vue</h2>
  </secton>
</template>