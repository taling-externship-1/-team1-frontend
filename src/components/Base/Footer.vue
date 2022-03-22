<template>
  <footer class="pt-10 pb-36 border-t border-gray-300">
    <div class="base-container">
      <!-- footer top -->
      <div>
        <div class="grid grid-cols-5">
          <div>
            <span class="f-top-title">COMPANY</span>
            <ul>
              <li>
                <router-link to="#"><span>회사 소개</span></router-link>
              </li>
              <li>
                <router-link to="#"><span>블로그</span></router-link>
              </li>
              <li>
                <router-link to="#"><span>언론보도</span></router-link>
              </li>
            </ul>
          </div>
          <div>
            <span class="f-top-title">POLICIES</span>
            <ul>
              <li>
                <router-link to="#"><span>이용약관</span></router-link>
              </li>
              <li>
                <router-link to="#">
                  <span class="font-semibold underline">개인정보처리방침</span>
                </router-link>
              </li>
              <li>
                <router-link to="#"><span></span></router-link>
              </li>
            </ul>
          </div>
          <div>
            <span class="f-top-title">SUPPORT</span>
            <ul>
              <li>
                <router-link to="#"><span>FAQ</span></router-link>
              </li>
              <li>
                <router-link to="#"><span>탈잉센터</span></router-link>
              </li>
              <li>
                <router-link to="#"><span></span></router-link>
              </li>
            </ul>
          </div>
          <div>
            <span class="f-top-title">B2B</span>
            <ul>
              <li>
                <router-link to="#"><span>기업교육</span></router-link>
              </li>
              <li>
                <router-link to="#"><span>브랜드제휴</span></router-link>
              </li>
              <li>
                <router-link to="#"><span></span></router-link>
              </li>
            </ul>
          </div>
          <div class="w-60">
            <span class="f-top-title">TALING CENTER</span>
            <ul>
              <li>
                <router-link to="#" class="flex items-center">
                  <img
                    src="https://front-img.taling.me/Content/app3/images/icon_cs.png"
                    alt="문의하기"
                    class="w-5 h-5 mr-2"
                  />
                  <span class="primary-color">탈잉에게 문의하기</span>
                </router-link>
              </li>
              <li class="row-span-2 text-black">
                <router-link to="#">
                  <p>운영시간</p>
                  <p>평일 10:00 ~ 17:00 점심 13:00 ~14:00</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- footer bottom -->
      <div class="grid grid-cols-5 mt-4">
        <div class="col-span-4 text-xs text-gray-400">
          <p>
            상호 : (주)탈잉 | 주소 : 서울특별시 강남구 테헤란로 625 6층 | 사업자등록번호 :
            767-88-00630 | 대표자명 : 김윤환
          </p>
          <p>통신판매업 신고번호 : 제 2017-서울강남-02964</p>
          <p class="mt-3">Copyright ⓒ2020 taling inc, ltd. All rights reserved</p>
        </div>
        <div class="col-span-1 flex items-end">
          <div class="socials flex gap-2">
            <router-link to="#">
              <img src="../../assets/socials/sns01.png" alt="facebook" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/socials/sns02.png" alt="instagram" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/socials/sns03.png" alt="youtube" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/socials/sns04.png" alt="naver" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.f-top-title {
  @apply font-bold;
}

.f-top-title + ul {
  @apply pt-4 text-sm text-gray-500 grid grid-rows-3 gap-3;
}

.socials img {
  @apply w-8;
}
</style>
