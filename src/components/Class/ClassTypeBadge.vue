<template>
  <div class="flex items-center gap-1 my-2 rounded" :class="BadgeColor[media?.name ?? 'LIVE']">
    <div>
      <img
        v-if="media?.name !== 'VOD'"
        :src="BadgeIconSrc[media?.name ?? 'LIVE']"
        alt=""
        class="w-6 h-6"
      />
    </div>
    <div>
      <span class="text-sm font-bold text-white">{{ media?.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ClassMedia } from '@/interfaces';
import { defineProps, PropType } from 'vue';

enum BadgeIconSrc {
  LIVE = 'https://front-img.taling.me/Content/app3/img/icon/icClasscardLive@2x.png',
  VOD = '',
  EBOOK = 'https://front-img.taling.me/Content/app3/img/icon/icClasscardEbook@2x.png',
  OFFLINE = 'https://front-img.taling.me/Content/app3/img/icon/icClasscardOffline@2x.png',
}

enum BadgeColor {
  LIVE = 'color-live w-16',
  VOD = 'color-vod w-10',
  EBOOK = 'color-ebook w-20',
  OFFLINE = 'color-offline w-24',
}

const props = defineProps({
  media: Object as PropType<ClassMedia>,
});
</script>

<style scoped>
.color-live {
  background-color: #f20e42;
}

.color-vod {
  background-color: #9433ff;
}

.color-ebook {
  background-color: #03d85e;
}

.color-offline {
  background-color: #3390ff;
}
</style>
