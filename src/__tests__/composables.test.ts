import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { navSections } from '@/composables/useActiveSection'

describe('useSmoothScroll', () => {
  beforeEach(() => {
    // Mock scrollTo
    Object.defineProperty(window, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    })
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    })
  })

  it('scrollToTop calls window.scrollTo with top: 0', () => {
    const { scrollToTop } = useSmoothScroll()
    scrollToTop()
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('scrollToSection does nothing when element is not found', () => {
    const { scrollToSection } = useSmoothScroll()
    // No element in DOM, should not throw
    expect(() => scrollToSection('nonexistent')).not.toThrow()
  })
})

describe('navSections', () => {
  it('contains expected sections', () => {
    expect(navSections).toContain('home')
    expect(navSections).toContain('about')
    expect(navSections).toContain('skills')
    expect(navSections).toContain('projects')
    expect(navSections).toContain('experience')
    expect(navSections).toContain('contact')
  })

  it('has 6 sections', () => {
    expect(navSections).toHaveLength(6)
  })
})
