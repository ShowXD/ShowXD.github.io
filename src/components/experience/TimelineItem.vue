<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import type { Experience } from '@/types'

const props = defineProps<{
  experience: Experience
  index: number
}>()

const itemRef = ref<HTMLElement | null>(null)
useScrollAnimation(itemRef, { threshold: 0.2 })

const isLeft = computed(() => props.index % 2 === 0)
</script>

<template>
  <div
    ref="itemRef"
    class="timeline-item fade-up-init"
    :class="{ 'is-left': isLeft, 'is-right': !isLeft }"
  >
    <div class="timeline-dot">
      <span
        :class="props.experience.type === 'work' ? 'i-mdi-briefcase-outline' : 'i-mdi-school-outline'"
        class="text-sm text-primary"
      />
    </div>

    <div class="timeline-card glass-card p-6">
      <div class="card-header">
        <div>
          <h3 class="role-title">
            {{ props.experience.role }}
          </h3>
          <p class="company-name gradient-primary">
            {{ props.experience.company }}
          </p>
        </div>
        <span class="period-badge">{{ props.experience.period }}</span>
      </div>

      <ul class="desc-list">
        <li
          v-for="(item, i) in props.experience.description"
          :key="i"
          class="desc-item"
        >
          <span class="i-mdi-chevron-right text-accent-cyan text-sm shrink-0 mt-1" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="tags">
        <span
          v-for="tag in props.experience.tags"
          :key="tag"
          class="tech-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr 40px 1fr;
    align-items: start;
  }

  .timeline-item.is-left .timeline-dot {
    grid-column: 2;
    grid-row: 1;
  }

  .timeline-item.is-left .timeline-card {
    grid-column: 1;
    grid-row: 1;
  }

  .timeline-item.is-right .timeline-dot {
    grid-column: 2;
    grid-row: 1;
  }

  .timeline-item.is-right .timeline-card {
    grid-column: 3;
    grid-row: 1;
  }
}

.timeline-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.15);
  border: 2px solid rgba(108, 99, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
  transition: background 0.3s ease, border-color 0.3s ease;
  justify-self: start;
}

@media (min-width: 768px) {
  .timeline-dot {
    justify-self: center;
  }
}

.timeline-item:hover .timeline-dot {
  background: rgba(108, 99, 255, 0.3);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(108, 99, 255, 0.4);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.role-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.company-name {
  font-size: 0.875rem;
  font-weight: 500;
}

.period-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.6rem;
  border-radius: 0.5rem;
  white-space: nowrap;
}

.desc-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.desc-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}

.fade-up-init {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up-init.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
