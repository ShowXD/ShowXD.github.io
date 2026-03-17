<script setup lang="ts">
import { useCursor } from '@/composables/useCursor'

const { cursorX, cursorY, dotX, dotY, isHovering, isVisible } = useCursor()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="cursor-ring"
      :class="{ 'is-hovering': isHovering }"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
      aria-hidden="true"
    />
    <div
      v-if="isVisible"
      class="cursor-dot"
      :style="{ left: `${dotX}px`, top: `${dotY}px` }"
      aria-hidden="true"
    />
  </Teleport>
</template>

<style scoped>
.cursor-ring,
.cursor-dot {
  position: fixed;
  pointer-events: none;
  z-index: var(--z-cursor);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(108, 99, 255, 0.6);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
}

.cursor-ring.is-hovering {
  width: 56px;
  height: 56px;
  border-color: rgba(0, 217, 255, 0.8);
  background: rgba(108, 99, 255, 0.05);
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--color-primary);
}

@media (pointer: coarse) {
  .cursor-ring,
  .cursor-dot {
    display: none;
  }
}
</style>
