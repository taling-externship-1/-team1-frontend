<template>
  <div>
    <div class="card border border-gray-300">
      <div class="card-wrapper relative">
        <!-- badge -->
        <div class="w-20 absolute top-2 opacity-90">
          <div class="bg-yellow-400 text-center pl-1 pr-1">
            <span class="text-sm text-white">1DAY수업</span>
          </div>
          <div class="bg-blue-400 text-center pl-1 pr-1">
            <span class="text-sm text-white">10명찜</span>
          </div>
        </div>

        <!-- tutor profile -->
        <div class="w-20 absolute bottom-14 right-1">
          <!-- avatar -->
          <div class="avtar w-11 h-11 mx-auto rounded-full bg-center bg-no-repeat bg-cover"></div>
          <!-- nickname -->
          <div>
            <div class="text-sm text-center">탈잉매니저</div>
            <div class="text-10px text-center">탈잉라이브센터</div>
          </div>
        </div>

        <!-- card top -->
        <div>
          <!-- image -->
          <div class="mb-3">
            <div class="card-img h-48 bg-center bg-no-repeat bg-cover"></div>
          </div>
        </div>

        <!-- card bottom -->
        <div class="pl-4">
          <!-- title -->
          <div class="mb-6">
            <h1 class="text-sm font-bold">탈잉 온라인 라이브 상담 센터</h1>
          </div>

          <!-- price -->
          <div class="mb-1">
            <span class="font-bold text-red-600">₩10,000</span>
            <span class="ml-1 text-xs">/시간</span>
          </div>

          <!-- new | rating | type -->
          <div class="flex gap-4 items-center">
            <div>
              <img class="w-9" :src="require('@/assets/resources/new.png')" alt="new" />
            </div>
            <div class="flex items-center">
              <span class="text-yellow-300">★★★★★</span>
              <span class="text-sm text-gray-400">(4)</span>
            </div>
            <div>
              <span class="text-gray-400">|</span>
            </div>
            <div>
              <span class="text-sm text-gray-400">온라인 LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ClassResponseDataDto } from '@/interfaces';

const classData = defineProps<ClassResponseDataDto>();
</script>

<style scoped>
.card {
  width: 324px;
  height: 318px;
}

.card-img {
  background-image: url('https://img.taling.me/Content/Uploads/Cover/d094e52b3d2c8d361da0ca8cb3cf5d46c64dc1c3.png');
}

.avtar {
  background-image: url('https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Profile/s_a78946b10fdd78693ef2a3c644cef69eba637734.png');
}

.text-10px {
  font-size: 0.625rem;
}
</style>
