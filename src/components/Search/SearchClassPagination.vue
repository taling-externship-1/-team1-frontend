<template>
  <div class="w-96 flex">
    <router-link
      to="#search-page"
      :key="idx"
      v-for="(_, idx) in new Array(10)"
      class="w-7 h-7 flex justify-center items-center text-gray-400 font-semibold"
      :class="{ active: idx === 0 }"
    >
      {{ idx + 1 }}
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
