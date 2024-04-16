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
  }
});
</script>

<template>
  <p :class="color,`text-${fontSize}`" class="text-center font-bold">{{props.title}}</p>
</template>