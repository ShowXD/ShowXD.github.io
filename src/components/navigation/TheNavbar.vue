<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection, navSections } from '@/composables/useActiveSection'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import MobileMenu from './MobileMenu.vue'

const { activeSection } = useActiveSection()
const { scrollToSection } = useSmoothScroll()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = navSections.map(id => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1),
}))

function onScroll() {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function navigate(sectionId: string) {
  scrollToSection(sectionId)
  isMenuOpen.value = false
}
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'scrolled': isScrolled }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="nav-inner container-section flex items-center justify-between h-18">
      <!-- Logo -->
      <a
        href="/"
        class="nav-logo"
        aria-label="Home"
        @click.prevent="navigate('home')"
      >
        <span class="gradient-primary font-display font-700 text-xl">ShowXD</span>
        <span class="logo-dot" />
      </a>

      <!-- Desktop Links -->
      <ul class="nav-links hidden md:flex items-center gap-1" role="list">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="nav-link"
            :class="{ active: activeSection === link.id }"
            :aria-current="activeSection === link.id ? 'page' : undefined"
            @click="navigate(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
        class="menu-toggle md:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="i-mdi-menu text-2xl" :class="{ 'i-mdi-close': isMenuOpen }" />
      </button>
    </div>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" :style="{ '--scroll': '0%' }" />
  </nav>

  <!-- Mobile Menu -->
  <MobileMenu
    :is-open="isMenuOpen"
    :links="navLinks"
    :active-section="activeSection"
    @navigate="navigate"
    @close="isMenuOpen = false"
  />
</template>

<style scoped>
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 26, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}

.logo-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-cyan);
  animation: pulse 2s infinite;
}

.nav-link {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color 0.2s ease, background 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-primary);
  background: rgba(108, 99, 255, 0.1);
}

.nav-link.active {
  color: var(--color-primary);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.2s ease;
}

.menu-toggle:hover {
  background: rgba(108, 99, 255, 0.1);
}

.scroll-progress {
  height: 2px;
  background: var(--gradient-primary);
  transform-origin: left;
  /* Controlled via JS scroll event */
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
