<script setup lang="ts">
interface Props {
  tag?: string
  hoverable?: boolean
  padding?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  hoverable: true,
  padding: 'p-6',
})
</script>

<template>
  <component
    :is="props.tag"
    class="glow-card"
    :class="[props.padding, { 'hoverable': props.hoverable }]"
  >
    <slot />
  </component>
</template>

<style scoped>
.glow-card {
  background: rgba(18, 18, 42, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.05), rgba(0, 217, 255, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-card.hoverable:hover {
  border-color: rgba(108, 99, 255, 0.4);
  box-shadow: 0 0 40px rgba(108, 99, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}

.glow-card.hoverable:hover::before {
  opacity: 1;
}
</style>
