<script setup lang="ts">
import SectionWrapper from '@/components/common/SectionWrapper.vue'
import TimelineItem from '@/components/experience/TimelineItem.vue'
import { experiences } from '@/data/experience'
</script>

<template>
  <SectionWrapper
    id="experience"
    title="Experience"
    subtitle="My professional journey and educational background."
    dark
  >
    <div class="timeline-wrapper">
      <!-- Vertical line -->
      <div class="timeline-line" aria-hidden="true" />

      <TimelineItem
        v-for="(exp, i) in experiences"
        :key="exp.id"
        :experience="exp"
        :index="i"
      />
    </div>
  </SectionWrapper>
</template>

<style scoped>
.timeline-wrapper {
  position: relative;
  padding: 1rem 0;
}

.timeline-line {
  display: none;
}

@media (min-width: 768px) {
  .timeline-line {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--color-primary), var(--color-accent-cyan), transparent);
    transform: translateX(-50%);
    opacity: 0.4;
  }
}
</style>
