<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  value: string
  label: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
})

const displayValue = ref('0')
const isAnimated = ref(false)
const elRef = ref<HTMLElement | null>(null)

function animateCount() {
  if (isAnimated.value) return
  isAnimated.value = true

  const numericPart = Number.parseInt(props.value.replace(/\D/g, ''))
  const suffix = props.value.replace(/\d/g, '')

  if (!numericPart) {
    displayValue.value = props.value
    return
  }

  const duration = 1500
  const startTime = performance.now()

  function update(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.floor(eased * numericPart) + suffix

    if (progress < 1) requestAnimationFrame(update)
  }

  setTimeout(() => requestAnimationFrame(update), props.delay)
}

onMounted(() => {
  if (!elRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCount()
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )
  observer.observe(elRef.value)
})
</script>

<template>
  <div ref="elRef" class="stat-card glass-card p-5 text-center">
    <div class="stat-value gradient-primary">
      {{ displayValue }}
    </div>
    <div class="stat-label">
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.15);
}

.stat-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}
</style>
