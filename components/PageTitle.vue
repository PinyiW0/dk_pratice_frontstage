<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: () => 'text-gray-900'
  },
  fontSize: {
    type: String,
    default: () => '10'
  },
  pt: {
    type: String,
    default: () => '0'
  },
  pb: {
    type: String,
    default: () => '0'
  }
});
</script>

<template>
  <p :class="color,`text-${fontSize}`,`pt-${pt}`,`pb-${pb}`" class="text-center font-bold mb-20">{{props.title}}</p>
</template>