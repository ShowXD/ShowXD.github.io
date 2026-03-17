<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ParticleBackground from '@/components/hero/ParticleBackground.vue'
import TypewriterText from '@/components/hero/TypewriterText.vue'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const { t, tm } = useI18n()
const { scrollToSection } = useSmoothScroll()

const heroRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="home"
    ref="heroRef"
    class="hero-section"
  >
    <ParticleBackground />
    <div class="hero-gradient" aria-hidden="true" />

    <div class="container-section hero-content" :class="{ visible: isVisible }">
      <div class="hero-text">
        <p class="hero-greeting">
          <span class="i-mdi-hand-wave text-accent-gold mr-2" />
          {{ t('hero.greeting') }}
        </p>
        <h1 class="hero-name">
          {{ t('profile.name') }}
        </h1>
        <h2 class="hero-tagline">
          <TypewriterText :texts="tm('hero.taglines') as string[]" />
        </h2>
        <p class="hero-bio">
          {{ t('hero.bio') }}
        </p>

        <div class="hero-ctas">
          <button class="btn-primary" @click="scrollToSection('projects')">
            <span class="i-mdi-briefcase-outline mr-2" />
            {{ t('hero.cta_work') }}
          </button>
          <button class="btn-outline" @click="scrollToSection('contact')">
            <span class="i-mdi-email-outline mr-2" />
            {{ t('hero.cta_contact') }}
          </button>
        </div>

        <div class="hero-social">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span :class="link.icon" class="text-xl" />
          </a>
        </div>
      </div>

      <button
        class="scroll-indicator"
        :aria-label="t('nav.about')"
        @click="scrollToSection('about')"
      >
        <span class="i-mdi-chevron-double-down" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--color-bg);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(108, 99, 255, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(0, 217, 255, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 100%, rgba(255, 107, 157, 0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-text {
  max-width: 700px;
}

.hero-greeting {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  color: var(--color-accent-cyan);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.hero-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.1;
  margin-bottom: 0.75rem;
}

.hero-tagline {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  min-height: 2.5rem;
}

.hero-bio {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 2.5rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.hero-social {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  color: var(--color-text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.social-link:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}

.scroll-indicator {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-muted);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.2s ease, border-color 0.2s ease;
  animation: bounce 2s ease-in-out infinite;
  align-self: flex-start;
}

.scroll-indicator:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
