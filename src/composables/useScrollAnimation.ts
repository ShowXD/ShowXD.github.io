import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollAnimation(
  target: Ref<HTMLElement | null>,
  options: {
    threshold?: number
    once?: boolean
    className?: string
  } = {},
) {
  const { threshold = 0.15, once = true, className = 'animate-in' } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
            if (once) observer?.unobserve(entry.target)
          }
          else if (!once) {
            entry.target.classList.remove(className)
          }
        })
      },
      { threshold },
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}

export function useStaggerAnimation(
  targets: Ref<HTMLElement[]>,
  delay: number = 100,
) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!targets.value.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = targets.value.indexOf(entry.target as HTMLElement)
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, index * delay)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    targets.value.forEach(el => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
