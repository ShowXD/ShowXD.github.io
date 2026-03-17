<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

interface Props {
  id?: string
  title?: string
  subtitle?: string
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
})

const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

useScrollAnimation(sectionRef, { threshold: 0.05 })
useScrollAnimation(headerRef, { threshold: 0.1 })
</script>

<template>
  <section
    :id="props.id"
    ref="sectionRef"
    class="section-base fade-up-init"
    :class="{ 'bg-bg-surface/30': props.dark }"
  >
    <div class="container-section">
      <div
        v-if="props.title"
        ref="headerRef"
        class="section-header fade-up-init"
      >
        <h2 class="heading-lg gradient-primary mb-3">
          {{ props.title }}
        </h2>
        <p v-if="props.subtitle" class="body-text max-w-2xl">
          {{ props.subtitle }}
        </p>
        <div class="section-divider" />
      </div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-header {
  margin-bottom: 3.5rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  margin-top: 1.25rem;
}

/* Fade-up animation */
.fade-up-init {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-up-init.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
