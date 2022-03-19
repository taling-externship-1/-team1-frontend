<template>
  <header class="w-full border-b-2 border-gray-100">
    <div class="base-container">
      <div class="flex gap-10 h-10 relative items-center">
        <h1 class="absolute top-0">
          <router-link to="/">
            <img
              class="w-24"
              src="https://front-img.taling.me/Content/app3/images/logo/logo.png"
              alt="logo"
            />
          </router-link>
        </h1>
        <div class="flex ml-32 items-center">
          <ul class="flex gap-5 text-sm font-bold">
            <li class="inline-block">
              <router-link to="#">
                <span class="active">홈HOME</span>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <span>브오디VOD</span>
              </router-link>
            </li>
          </ul>
          <div class="ml-5">
            <div class="border-b border-black">
              <input type="text" class="focus:outline-none pl-4 text-sm" />
              <button class="w-4 h-4 search-btn"></button>
            </div>
          </div>
        </div>
        <nav class="flex flex-grow justify-end">
          <ul class="flex gap-8 text-sm">
            <li>
              <router-link to="#">튜터등록</router-link>
            </li>
            <li>
              <router-link to="#">로그인</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.active::after {
  content: '';
  display: block;
  border-bottom: 2px solid transparent;
  background-color: #111;
}

.search-btn {
  background-image: url('https://front-img.taling.me/Content/app3/images/icon_search.png');
  background-size: cover;
}
</style>
