<template>
  <div>
    <NavBar />
    <main>
      <div class="page-fit-container">
        <div class="mt-5 mb-5 text-sm text-gray-600">7376개의 수업</div>
        <!-- search class -->
        <div class="mb-20 grid grid-cols-3 gap-5">
          <div :key="idx" v-for="(_, idx) in new Array(15)">
            <router-link to="#">
              <SearchClassCard />
            </router-link>
          </div>
        </div>
        <!-- pagination -->
        <div class="mb-20">
          <SearchClassPagination class="mx-auto" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/Base/NavBar.vue';
import Footer from '@/components/Base/Footer.vue';
import SearchClassCard from '@/components/Search/SearchClassCard.vue';
import SearchClassPagination from '@/components/Search/SearchClassPagination.vue';
</script>

<style scoped>
.active {
  @apply border border-gray-400 text-red-500;
}
</style>
