import { ref, onMounted, onUnmounted } from 'vue'

export const navSections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export function useActiveSection() {
  const activeSection = ref('home')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id || 'home'
          }
        })
      },
      {
        threshold: 0.4,
        rootMargin: '-72px 0px 0px 0px',
      },
    )

    navSections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}
