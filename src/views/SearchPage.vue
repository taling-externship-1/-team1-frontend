<template>
  <div>
    <NavBar />
    <main>
      <div class="page-fit-container">
        <div class="mt-5 mb-5 text-sm text-gray-600">7376개의 수업</div>
        <!-- search class -->
        <div class="mb-20 grid grid-cols-3 gap-5">
          <div :key="classData.id" v-for="classData in classList.data">
            <router-link :to="`/class/${classData.id}`">
              <SearchClassCard :classData="classData" />
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
import { useStore } from 'vuex';
import { computed } from 'vue';
import NavBar from '@/components/Base/NavBar.vue';
import Footer from '@/components/Base/Footer.vue';
import SearchClassCard from '@/components/Search/SearchClassCard.vue';
import SearchClassPagination from '@/components/Search/SearchClassPagination.vue';

const store = useStore();
await store.dispatch('fetchClassList');
const classList = computed(() => store.state.classList);
</script>

<style scoped>
.active {
  @apply border border-gray-400 text-red-500;
}
</style>
