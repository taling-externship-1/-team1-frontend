<template>
  <header>
    <div class="container py-2 mx-auto">
      <h1 class="logo">
        <router-link to="/">
          <img :src="require('@/assets/images/app-logo@2x.png')" alt="탈잉TM" />
        </router-link>
      </h1>
      <div class="hd_main">
        <ul class="items-center justify-between flex-1">
          <li class="link_home act">
            <a class="underline" href="/">홈<span>HOME</span></a>
          </li>
          <li class="link_vod">
            <a href="/vod/list">브오디<span>VOD</span></a>
          </li>
        </ul>
        <div class="flex-1">
          <input
            type="text"
            class="inp_sch"
            placeholder="배우고 싶은 재능이나 튜터를 검색해보세요."
          />
          <button class="btn_sch"><span class="blind">검색</span></button>
          <div class="box_keyword">
            <h2>추천 키워드</h2>
            <ul class="keyword_list">
              <li>
                <a href="#">아트테크</a>
              </li>
              <li>
                <a href="#">비트코인</a>
              </li>
              <li>
                <a href="#">영어자격증</a>
              </li>
              <li>
                <a href="#">신학기_디자인영상</a>
              </li>
              <li>
                <a href="#">유튜브_제작</a>
              </li>
              <li>
                <a href="#">인스타_관리</a>
              </li>
              <li>
                <a href="#">부동산/프롭테크</a>
              </li>
              <li>
                <a href="#">영어일기쓰기_챌린지</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
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
