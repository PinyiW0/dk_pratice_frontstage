<script lang="ts" setup>
const route = useRoute();

defineProps({
  list: {
    type: Array,
    required: true
  } as any
});

const modelValue = defineModel();
</script>

<template>
  <div class="w-full max-w-80 flex ">
    <NuxtLink v-for="(item, idx) in list" :key="idx" :to="`/text/${item.value}`"
      :class="[String(route.params.page) == item.value ? 'bg-blue-800' : 'bg-#0B1431']"
      class="w-28 h-10 flex items-center justify-center decoration-none rounded-2 cursor-pointer text-white">
      {{ 'Tab.' + item.value }}
    </NuxtLink>
  </div>
</template>
