export function useSmoothScroll() {
  function scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId)
    if (!el) return

    const navHeight = 72
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({ top, behavior: 'smooth' })
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { scrollToSection, scrollToTop }
}
