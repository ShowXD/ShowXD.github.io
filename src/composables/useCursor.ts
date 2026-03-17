import { ref, onMounted, onUnmounted } from 'vue'

export function useCursor() {
  const cursorX = ref(-100)
  const cursorY = ref(-100)
  const dotX = ref(-100)
  const dotY = ref(-100)
  const isHovering = ref(false)
  const isVisible = ref(false)

  let animFrame: number
  let targetX = -100
  let targetY = -100

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
  }

  function animate() {
    const newDotX = lerp(dotX.value, targetX, 0.12)
    const newDotY = lerp(dotY.value, targetY, 0.12)
    if (Math.abs(newDotX - dotX.value) > 0.1) dotX.value = newDotX
    if (Math.abs(newDotY - dotY.value) > 0.1) dotY.value = newDotY
    animFrame = requestAnimationFrame(animate)
  }

  function onMouseMove(e: MouseEvent) {
    targetX = e.clientX
    targetY = e.clientY
    cursorX.value = e.clientX
    cursorY.value = e.clientY
    if (!isVisible.value) isVisible.value = true
  }

  function onMouseEnterInteractive() {
    isHovering.value = true
  }

  function onMouseLeaveInteractive() {
    isHovering.value = false
  }

  function updateInteractiveListeners() {
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })
  }

  onMounted(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.addEventListener('mousemove', onMouseMove)
    animFrame = requestAnimationFrame(animate)

    const mo = new MutationObserver(updateInteractiveListeners)
    mo.observe(document.body, { childList: true, subtree: true })
    updateInteractiveListeners()
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    cancelAnimationFrame(animFrame)
  })

  return { cursorX, cursorY, dotX, dotY, isHovering, isVisible }
}
