<script lang="ts" setup>
const route = useRoute()
const router = useRouter();
const { page } = route.params
</script>

<template>
  <section class="w-full pt-10 pb-25 flex flex-col gap-5 items-center border-1 border-solid border-#FFD79B">
    <h3>這裡是 Users 動態路由頁面</h3>
    <p>匹配到的 Id: {{ page }}</p>
    <p>route.path: {{ route.path }}</p>
    <p>route.params.page: {{ route.params.page }}</p>
    <p :class="[route.params.page !== '1' ? 'text-#3366A2' : 'text-#f28500']">Hello! {{ $route.params.page }}</p>
  </section>
</template>