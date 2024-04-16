<script lang="ts" setup></script>

<template>
  <div>
    <div class="w-full bg-brand h-5px"></div>
    <nav class="w-full flex justify-between bg-brand-lighter">
      <ul class="flex items-center p-5">
        <li>
          <nuxt-link to="/" class="p-4 no-underline text-brand-darker font-600">
            <img
              class="mb-1"
              src="/logo.svg"
              alt="格上租車"
              style="width: 200px"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4 no-underline text-brand-darker font-600">
          最新消息
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4 no-underline">
          常見問題
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex items-center p-5">
        <li class="me-5">
          <a class="hover:opacity-50" href="https://www.instagram.com/">
            <img src="/ig.svg" alt="instagram">
          </a>
        </li>
        <li>
          <a class="hover:opacity-50" href="https://www.facebook.com/">
            <img src="/fb.svg" alt="facebook">
          </a>
        </li>
      </ul>
    </nav>
    <div class="w-full bg-brand flex justify-center items-center">
      <p class="text-white text-18px me-30px py-8">格上汽車租賃股份有限公司 版權所有嚴禁翻版、轉載、盜用</p>
      <p class="text-white text-18px py-8">Copyright © 2023 All Rights Reserved.</p>
    </div>
  </div>
</template>

<style scoped></style>
