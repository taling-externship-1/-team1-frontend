<template>
  <div class="container px-40 mx-auto">
    <main class="flex space-x-2">
      <div class="flex-grow">
        <div class="flex items-center justify-start h-16 py-12 mx-auto">
          <h1 class="logo">
            <router-link to="/">
              <img :src="require('@/assets/images/app-logo@2x.png')" alt="탈잉TM" />
            </router-link>
          </h1>

          <div
            class="flex items-center justify-start w-full h-16 ml-2 border border-gray-100 rounded-md"
          >
            <nav class="flex items-center justify-center mx-10 space-x-8 text-sm font-medium">
              <a class="py-1 font-bold text-gray-900 border-b-2 border-black" href="">홈 HOME</a>
              <a class="font-bold text-gray-900" href="">브오디 VOD</a>
            </nav>

            <form class="hidden mb-0 lg:flex">
              <div class="relative">
                <input
                  class="h-10 pl-4 text-sm border-2 border-gray-200 w-96 rounded-3xl focus:z-10 focus:border-pink-600"
                  placeholder="배우고 싶은 재능이나 튜터를 검색해보세요."
                  type="text"
                />

                <button
                  class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                  type="submit"
                >
                  <svg
                    class="w-5 h-5 text-pink-500"
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
        </div>

        <div class="mb-2 border border-gray-100 rounded-md">
          <img
            class="border rounded-md"
            src="https://img.taling.me/Content/Uploads/Images/9af2a2d23ee9cbd9cf26b9b3b244bc3c434b1671.png"
            alt=""
          />
        </div>

        <div class="border border-gray-100 rounded-md">
          <section class="flex justify-center border-b border-gray-200">
            <ul class="flex flex-wrap">
              <li class="mr-2" v-for="(tab, index) in tabs.contents" :key="tab.name">
                <button
                  @click="tabs.seleted = index"
                  :class="{
                    [tabs.seleted === index ? 'tab_active' : 'tab']: true,
                  }"
                >
                  {{ tab.name }}
                </button>
              </li>
            </ul>
          </section>

          <section v-for="lecture in lectures" :key="lecture.id">
            <router-link :to="`/class/${lecture.id}`">
              <div class="px-4 py-8 mx-auto">
                <h2 class="mt-1 text-2xl font-extrabold uppercase">지금! 뜨고 있는 클래스</h2>

                <div class="grid grid-cols-3 mt-8 gap-x-10 gap-y-8">
                  <div class="block" v-for="n in 3" :key="n">
                    <a class="flex justify-end" href="#">
                      <img
                        class="relative h-10 px-4 top-6"
                        :src="require('@/assets/images/icWishUnclickedLine38Px@2x.png')"
                        alt=""
                      />
                    </a>

                    <img
                      :src="require('@/assets/images/f47bffd0bbef1c1c14b1957c613c0fac79641396.jpg')"
                      class="w-full -mt-8 rounded-2xl"
                    />
                    <ClassTypeBadge :media="lecture.class_media" />
                    <h5 class="mt-4 text-sm text-black">
                      {{ lecture.name }}
                    </h5>
                    <p class="text-xs font-bold text-gray-400">{{ lecture.user.name }}</p>
                    <p class="text-sm font-bold">
                      {{ totalPrice(lecture.total_time, lecture.price_for_hour) }}원
                    </p>
                    <p class="text-xs">
                      (총 {{ lecture.total_time }}시간 / 시간당
                      {{ lecture.price_for_hour.toLocaleString() }}원)
                    </p>
                    <p class="text-xs">
                      <span class="text-red-500">♥</span> {{ lecture.view_count }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </section>
        </div>
      </div>

      <aside class="flex-none my-4 w-96">
        <ul class="grid grid-cols-3 text-sm text-center border border-gray-100 rounded-md">
          <li class="category">인기</li>
          <li class="category">외국어</li>
          <li class="category">액티비티</li>
          <li class="category">취미공예</li>
          <li class="category">디자인영상</li>
          <li class="category">뷰티헬스</li>
          <li class="category">라이프</li>
          <li class="category">머니</li>
          <li class="category">커리어</li>
        </ul>

        <article
          class="my-2 border border-gray-100 rounded-md bg-gray-50"
          v-if="store.getters.isLogin"
        >
          <div class="flex m-6">
            <img
              class="border-2 border-white border-solid rounded-full w-14 h-14"
              src="https://img.taling.me/Content/Uploads/Profile/f858260f3b83ffdd13af113c84be00b4cb58fff9.jpg"
              alt=""
            />
            <div class="flex flex-col justify-center ml-2">
              <b>{{ user.name }}님</b>
              <div>
                <span>반가워요</span>
                <button
                  @click="store.commit('LOGOUT')"
                  class="mx-2 text-xs text-gray-400 underline bold"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>

          <div class="flex m-6 text-sm">
            <div class="px-3 py-2 bg-gray-200 rounded-3xl">쿠폰 <b>8</b> | 포인트 <b>0P</b></div>
          </div>
          <ul class="grid grid-cols-3 text-center">
            <li class="flex items-center justify-center border border-gray-100 h-14">
              <a href="#">수업신청서</a>
            </li>
            <li class="flex items-center justify-center border border-gray-100 h-14">
              <a href="#">수강목록</a>
            </li>
            <li class="flex items-center justify-center border border-gray-100 h-14">
              <a href="#"><span class="text-red-500">♥</span> 찜</a>
            </li>
          </ul>
        </article>

        <article class="my-2 border border-gray-100 rounded-md bg-gray-50" v-else>
          <div class="m-6 text-xl font-bold">
            로그인 하시고 탈잉의<br />
            다양한 튜터를 만나보세요.

            <button class="btn-login" @click="router.push('/login')">탈잉 로그인</button>
          </div>
        </article>
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { LectureApi } from '@/api';
import { Lecture } from '@/interfaces';
import ClassTypeBadge from '@/components/Class/ClassTypeBadge.vue';

const store = useStore();
const router = useRouter();
const lectures = ref<Lecture[]>([]);
const user = computed(() => store.state.user);
const tabs = reactive({
  seleted: 1,
  contents: [
    { name: '추천수업' },
    { name: '탈잉 BEST' },
    { name: '이번 주 시작' },
    { name: '원데이 BEST' },
    { name: '다회차 BEST' },
    { name: '온라인' },
    { name: '오프라인' },
  ],
});

const totalPrice = (time: number, price: number): string => (time * price).toLocaleString();

lectures.value = await LectureApi.fetchLectures().then(res => res.data.data);
</script>

<style scoped>
.logo {
  width: 70px;
  height: 70px;
}

.hd_main {
  @apply overflow-hidden border border-gray-100 rounded-lg shadow-sm flex items-center px-10;
}

.tab {
  @apply inline-block px-4 py-4 text-sm font-medium text-center border-b-4 border-transparent rounded-t-lg text-gray-600 hover:border-gray-300;
}

.tab_active {
  @apply inline-block px-4 py-4 text-sm font-medium text-center text-pink-600 border-b-4 border-pink-600 rounded-t-lg;
}

.category {
  @apply h-12 leading-10 hover:text-pink-600;
}

.category:hover {
  font-weight: bold;
  cursor: pointer;
}

.btn-login {
  margin-top: 2rem;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  line-height: 48px;
  background-color: #ff0045;
  margin-bottom: 2rem;
}
</style>
