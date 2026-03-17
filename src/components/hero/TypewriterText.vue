<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseDuration: 2000,
})

const displayText = ref('')
const showCursor = ref(true)

let currentIndex = 0
let charIndex = 0
let isDeleting = false
let timeout: ReturnType<typeof setTimeout>
let cursorInterval: ReturnType<typeof setInterval>

function type() {
  const currentText = props.texts[currentIndex]

  if (!isDeleting) {
    displayText.value = currentText.slice(0, charIndex + 1)
    charIndex++

    if (charIndex === currentText.length) {
      isDeleting = true
      timeout = setTimeout(type, props.pauseDuration)
      return
    }
  }
  else {
    displayText.value = currentText.slice(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      currentIndex = (currentIndex + 1) % props.texts.length
    }
  }

  timeout = setTimeout(type, isDeleting ? props.deletingSpeed : props.typingSpeed)
}

onMounted(() => {
  timeout = setTimeout(type, 500)
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  clearTimeout(timeout)
  clearInterval(cursorInterval)
})
</script>

<template>
  <span class="typewriter">
    <span class="gradient-primary font-700">{{ displayText }}</span>
    <span
      class="cursor"
      :class="{ 'opacity-0': !showCursor }"
    >|</span>
  </span>
</template>

<style scoped>
.typewriter {
  display: inline;
}

.cursor {
  color: var(--color-accent-cyan);
  font-weight: 300;
  transition: opacity 0.1s ease;
  margin-left: 1px;
}
</style>
