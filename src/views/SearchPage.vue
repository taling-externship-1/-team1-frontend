<template>
  <div>
    <NavBar />
    <main>
      <div class="page-container">
        <SearchClassCard />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/Base/NavBar.vue';
import Footer from '@/components/Base/Footer.vue';
import SearchClassCard from '@/components/Search/SearchClassCard.vue';
</script>

<style scoped></style>
