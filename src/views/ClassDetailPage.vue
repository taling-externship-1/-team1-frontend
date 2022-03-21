<template>
  <div>
    <NavBar />
    <main class="mt-10">
      <!-- container -->
      <div class="page-container flex">
        <!-- area - class detail description & recommendation -->
        <div class="flex-grow">
          <ClassDetail />
          <ClassRecommendation />
        </div>
        <!-- area - class schedule -->
        <div class="w-96 pl-10">
          <ClassSchedule class="sticky top-1" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/Base/NavBar.vue';
import Footer from '@/components/Base/Footer.vue';
import ClassDetail from '@/components/Class/ClassDetail.vue';
import ClassRecommendation from '@/components/Class/ClassRecommendation.vue';
import ClassSchedule from '@/components/Class/ClassSchedule.vue';
</script>

<style scoped></style>
