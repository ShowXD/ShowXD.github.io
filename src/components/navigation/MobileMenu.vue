<script setup lang="ts">
interface NavLink {
  id: string
  label: string
}

interface Props {
  isOpen: boolean
  links: NavLink[]
  activeSection: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  navigate: [sectionId: string]
  close: []
}>()
</script>

<template>
  <Transition name="slide-down">
    <div
      v-if="props.isOpen"
      class="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <ul class="mobile-nav-list">
        <li
          v-for="(link, i) in props.links"
          :key="link.id"
          :style="{ animationDelay: `${i * 60}ms` }"
          class="mobile-nav-item"
        >
          <button
            class="mobile-nav-link"
            :class="{ active: props.activeSection === link.id }"
            @click="emit('navigate', link.id)"
          >
            <span class="link-index">0{{ i + 1 }}.</span>
            {{ link.label }}
          </button>
        </li>
      </ul>
    </div>
  </Transition>

  <Transition name="fade">
    <div
      v-if="props.isOpen"
      class="mobile-overlay"
      @click="emit('close')"
    />
  </Transition>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  z-index: calc(var(--z-navbar) - 1);
  background: rgba(10, 10, 26, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.5rem 2rem;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-navbar) - 2);
  background: rgba(0, 0, 0, 0.5);
  top: 72px;
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  transition: color 0.2s ease, background 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--color-text-primary);
  background: rgba(108, 99, 255, 0.1);
}

.mobile-nav-link.active {
  color: var(--color-primary);
}

.link-index {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color-accent-cyan);
}

.mobile-nav-item {
  animation: slideIn 0.3s ease both;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
