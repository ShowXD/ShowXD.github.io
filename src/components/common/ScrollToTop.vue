<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const { scrollToTop } = useSmoothScroll()
const isVisible = ref(false)

function onScroll() {
  isVisible.value = window.scrollY > 400
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="scroll-top-btn"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <span class="i-mdi-chevron-up text-xl" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--gradient-primary);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(108, 99, 255, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.6);
}
</style>
