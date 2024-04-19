<script lang="ts" setup>
/* tab */
const changeTab = ref<string>('');
const tabList2: any[] = [
  { label: 'Tab.1', value: '' },
  { label: 'Tab.2', value: '1' },
  { label: 'Tab.3', value: '2' },
];
</script>

<template>
  <section class="w-full bg-white flex flex-col items-center justify-center border-1 border-solid border-#FFD79B">
    <div class="md:w-[calc(100%-160px)] xl:w-[calc(100%-320px)] p-5 flex flex-col items-start ">
      <PageTitle label="我是text.vue"/>
      <TabTest v-model="changeTab" :list="tabList2" class="flex gap-4 ml-11" />
    </div>
    <div class="md:w-[calc(100%-160px)] xl:w-[calc(100%-320px)] p-5 flex flex-col items-center justify-center">
      <NuxtPage />
    </div>
  </section>
</template>
