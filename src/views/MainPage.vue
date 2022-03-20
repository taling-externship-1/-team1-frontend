<template>
  <header class="container mx-auto">
    <div class="flex items-center justify-start h-16 px-4 py-12 mx-auto">
      <h1 class="logo">
        <router-link to="/">
          <img :src="require('@/assets/images/app-logo@2x.png')" alt="탈잉TM" />
        </router-link>
      </h1>

      <div
        class="flex items-center justify-start w-full h-16 m-2 border border-gray-100 rounded-md"
      >
        <nav class="flex items-center justify-center mx-10 space-x-8 text-sm font-medium">
          <a class="py-1 font-bold text-gray-900 border-b-2 border-black" href="">홈 HOME</a>
          <a class="font-bold text-gray-900" href="">브오디 VOD</a>
        </nav>

        <form class="hidden mb-0 lg:flex">
          <div class="relative">
            <input
              class="h-10 text-sm border-2 border-gray-200 rounded-3xl pr-60 focus:z-10"
              type="text"
            />

            <button
              class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
              type="submit"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div class="flex justify-end flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <ul class="flex items-center justify-start w-full h-16 m-2 border border-gray-100 rounded-md">
    <li class="flex-1">
      <a class="relative block p-4" href="">
        <span class="absolute inset-x-0 w-full h-px bg-pink-600 border-2 -bottom-px"></span>

        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>

          <span class="ml-3 text-sm font-medium text-gray-900"> Settings </span>
        </div>
      </a>
    </li>

    <li class="flex-1">
      <a class="relative block p-4" href="">
        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>

          <span class="ml-3 text-sm font-medium text-gray-900"> Messages </span>
        </div>
      </a>
    </li>

    <li class="flex-1">
      <a class="relative block p-4" href="">
        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>

          <span class="ml-3 text-sm font-medium text-gray-900"> Archive </span>
        </div>
      </a>
    </li>

    <li class="flex-1">
      <a class="relative block p-4" href="">
        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <span class="ml-3 text-sm font-medium text-gray-900"> Notifications </span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  width: 70px;
  height: 70px;
}

.hd_main {
  @apply block overflow-hidden border border-gray-100 rounded-lg shadow-sm flex items-center px-10;
}
</style>
