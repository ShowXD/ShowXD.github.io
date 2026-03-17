<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomCursor from '@/components/common/CustomCursor.vue'
import ScrollToTop from '@/components/common/ScrollToTop.vue'
</script>

<template>
  <CustomCursor />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <ScrollToTop />
</template>
