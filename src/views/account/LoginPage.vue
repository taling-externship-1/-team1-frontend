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
  </header>

  <!-- 로그인 폼 -->

  <div class="max-w-screen-xl px-4 mx-auto py-36">
    <div class="max-w-md mx-auto">
      <form action="" class="block p-8 overflow-hidden border border-gray-100 rounded-lg shadow-sm">
        <p class="text-2xl font-thin">
          간편하게 로그인하고 탈잉의 <br />
          다양한 튜터를 만나보세요.
        </p>

        <div class="my-14">
          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              v-model="loginUser.email"
              class="w-full p-4 pr-12 text-sm border-b border-gray-200"
              placeholder="이메일 주소를 입력해주세요"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>

          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              v-model="loginUser.password"
              class="w-full p-4 pr-12 text-sm border-b border-gray-200"
              placeholder="비밀번호를 입력해주세요"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button type="button" class="btn_login" @click.prevent="login">로그인하기</button>

        <router-link to="/login-join" class="text-sm text-center text-gray-500"
          >회원가입</router-link
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginUserDto } from '@/interfaces';
import { reactive, toRaw } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loginUser = reactive<LoginUserDto>({
  email: '',
  password: '',
});

const login = () => {
  store.dispatch('login', toRaw(loginUser));
};
</script>

<style scoped>
.btn_login {
  width: 100%;
  height: 48px;
  border-radius: 2px;
  font-size: 16px;
  color: #fff;
  line-height: 48px;
  background-color: #ff0045;
  margin-bottom: 2rem;
}
</style>
