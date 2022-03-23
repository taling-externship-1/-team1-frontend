<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component"></component>
        <template #fallback> Loading... </template>
      </Suspense>
    </router-view>
  </div>
</template>
