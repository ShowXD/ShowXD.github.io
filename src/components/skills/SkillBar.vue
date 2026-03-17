<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Skill } from '@/types'

const props = defineProps<{ skill: Skill }>()

const barRef = ref<HTMLElement | null>(null)
const animated = ref(false)
const displayLevel = ref(0)

onMounted(() => {
  if (!barRef.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated.value) {
        animated.value = true
        setTimeout(() => {
          displayLevel.value = props.skill.level
        }, 200)
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )
  observer.observe(barRef.value)
})
</script>

<template>
  <div ref="barRef" class="skill-bar-item">
    <div class="skill-bar-header">
      <div class="skill-info">
        <span v-if="props.skill.icon" :class="props.skill.icon" class="skill-icon text-primary" />
        <span class="skill-name">{{ props.skill.name }}</span>
      </div>
      <span class="skill-level">{{ props.skill.level }}%</span>
    </div>
    <div class="bar-track">
      <div
        class="bar-fill"
        :style="{ width: `${displayLevel}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.skill-bar-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-bar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skill-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-icon {
  font-size: 1.1rem;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.skill-level {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color-accent-cyan);
}

.bar-track {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 3px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.bar-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent-cyan);
  box-shadow: 0 0 8px var(--color-accent-cyan);
}
</style>
