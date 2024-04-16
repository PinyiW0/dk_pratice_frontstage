<script lang="ts" setup></script>

<template>
  <div>
    <nav class="flex justify-between items-center py-6 px-16">
      <nuxt-link to="/" class="p-4 no-underline">
        <img class="mb-1" src="/logo.svg" alt="格上租車" style="width: 200px" />
        <p class="text-22px font-700 text-primary font-700 my-0">
          格上駕駛附駕平台 Surdriver
        </p>
      </nuxt-link>
      <div class="flex justify-center items-center">
        <menu
          class="flex justify-center items-center px-7 me-5 bg-brand-lighter rounded-full"
        >
          <ul class="list-none pl-0 flex justify-center items-center">
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">代駕服務</nuxt-link>
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">計時包車</nuxt-link>
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">長照接送</nuxt-link>
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">機場接送</nuxt-link>
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">最新消息</nuxt-link>
            </li>
            <li class="px-3 pt-4 pb-7">
              <nuxt-link to="/" class="page-link">常見問題</nuxt-link>
            </li>
          </ul>
        </menu>
        <div class="flex justify-center items-center">
          <button type="button" class="pe-3 page-link ">
            <nuxt-link to="/login" class="decoration-none page-link ">登入</nuxt-link>
          </button>
          <button type="button" class="btn-primary text-18px me-3">註冊</button>
          <div class="w-50px cursor-pointer hamburgerhover">
            <div class="w-30px h-3px bg-gray-900 rounded-full mb-2"></div>
            <div class="w-30px h-3px bg-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang=scss scoped>
.hamburgerhover {
  &:hover {
    div:first-child{
      transform: translateY(0px) rotate(45deg);
    };
    div:last-child{
      transform: translateY(-11px) rotate(-45deg);
    }
    div {
      transition: transform 0.3s ease;
    }
  }
}
</style>
