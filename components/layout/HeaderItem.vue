<script lang="ts" setup></script>

<template>
  <div>
    <nav style="background-color: gainsboro">
      <nuxt-link to="/" style="margin-right: 8px">首頁</nuxt-link>
      <nuxt-link to="/login" style="margin-right: 8px">登入頁</nuxt-link>
    </nav>
    <nav class="flex justify-between items-center py-6 px-16">
      <nuxt-link to="/" class="p-4 no-underline">
        <img class="mb-1" src="/logo.svg" alt="格上租車" style="width:200px" />
        <p class="text-22 font-700 text-primary font-700 my-0">格上駕駛附駕平台 Surdriver</p>
      </nuxt-link>
      <div class="flex justify-center items-center">
        <menu
          class="flex justify-center items-center px-7 me-5 bg-brand-lighter rounded-full"
        >
          <ul class="list-none pl-0 flex justify-center items-center">
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >代駕服務</nuxt-link
              >
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >計時包車</nuxt-link
              >
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >長照接送</nuxt-link
              >
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >機場接送</nuxt-link
              >
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >最新消息</nuxt-link
              >
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link
                to="/"
                class="no-underline text-18 text-gray-900 font-600 hover:text-brand-dark"
                >常見問題</nuxt-link
              >
            </li>
          </ul>
        </menu>
        <div class="flex justify-center items-center">
          <button type="button" class="page-link pe-3">登入</button>
          <button type="button" class="btn-primary text-18 me-3">註冊</button>
          <a href="#">
            <img src="/folder.svg" alt="folder">
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
