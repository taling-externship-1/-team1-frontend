<template>
  <header class="shadow-sm">
    <div class="flex items-center justify-between h-16 max-w-screen-xl px-4 py-12 mx-auto">
      <div class="flex flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>

      <h1 class="w-24 h-12">
        <router-link to="/">
          <img :src="require('@/assets/images/logo.png')" alt="탈잉TM" />
        </router-link>
      </h1>

      <nav
        class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
      >
        <a class="py-1 font-bold text-gray-900 border-b-2 border-black" href="">홈 HOME</a>
        <a class="font-bold text-gray-900" href="">브오디 VOD</a>
      </nav>

      <div class="flex items-center space-x-4">
        <form class="hidden mb-0 lg:flex">
          <div class="relative">
            <input class="h-10 pr-10 text-sm border-b border-black focus:z-10" type="text" />

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

      <nav
        class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
      >
        <a class="text-gray-900" href="">튜터등록</a>
        <a class="text-gray-900" href="">로그인</a>
      </nav>
    </div>

    <div class="border-t border-gray-100 lg:hidden">
      <nav class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
        <a class="flex-shrink-0 pl-4 text-gray-900" href="">튜터등록</a>
        <a class="flex-shrink-0 pl-4 text-gray-900" href="">로그인</a>
      </nav>
    </div>
  </header>

  <!-- 로그인 폼 -->

  <div class="max-w-screen-xl px-4 mx-auto py-36">
    <div class="max-w-md mx-auto">
      <form action="" class="block p-8 overflow-hidden border border-gray-100 rounded-lg shadow-sm">
        <img
          class="w-40 mx-auto"
          :src="require('@/assets/images/imgWelcomeCoupon258Px@2x.png')"
          alt="welcome coupon"
        />
        <img
          class="mx-auto my-2 w-44"
          :src="require('@/assets/images/imgSpeechBubble@2x.png')"
          alt="탈잉이 처음이라면?"
        />
        <p class="text-lg font-medium font-bold">가입 즉시 12만원 쿠폰팩을 드려요!</p>

        <button type="submit" class="btn_kakao">
          <img
            src="//front-img.taling.me/Content/app3/img/logo/logo-kakao@3x.png"
            width="19"
            alt=""
          />&nbsp; 카카오톡으로 로그인
        </button>

        <button type="submit" class="btn_apple">
          <img
            src="//front-img.taling.me/Content/app3/img/logo/logo-apple@3x.png"
            width="13"
            alt=""
          />&nbsp; Apple로 로그인
        </button>

        <a class="text-sm text-center text-gray-500">이메일 로그인</a> |
        <a class="text-sm text-center text-gray-500">페이스북 로그인</a> |
        <a class="text-sm text-center text-gray-500">아이디 찾기</a>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn_kakao {
  margin: 30px 0 12px;
  color: #381e1f;
  background-color: #feeb4a;
}

.btn_apple {
  margin-bottom: 24px;
  color: #fff;
  background-color: #222;
}

.btn_kakao,
.btn_apple {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
}
</style>
