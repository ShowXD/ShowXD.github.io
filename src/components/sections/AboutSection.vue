<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionWrapper from '@/components/common/SectionWrapper.vue'
import StatCounter from '@/components/about/StatCounter.vue'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social'

const { t } = useI18n()
</script>

<template>
  <SectionWrapper
    id="about"
    :title="t('about.title')"
    :subtitle="t('about.subtitle')"
  >
    <div class="about-grid">
      <div class="avatar-col">
        <div class="avatar-wrapper">
          <div class="avatar-glow" />
          <img
            :src="profile.avatar"
            :alt="`${profile.name} avatar`"
            class="avatar-img"
            loading="lazy"
            @error="(e) => ((e.target as HTMLImageElement).src = 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=XueYiZhan&backgroundColor=6C63FF')"
          />
          <div class="avatar-ring" />
        </div>
        <div class="about-socials">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="social-btn glass-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span :class="link.icon" class="text-lg" />
          </a>
        </div>
      </div>

      <div class="text-col">
        <h3 class="about-subtitle">
          {{ t('about.who_am_i') }}
        </h3>
        <p class="about-bio">
          {{ t('hero.bio') }}
        </p>

        <div class="about-details">
          <div class="detail-item">
            <span class="i-mdi-map-marker-outline text-accent-cyan mr-2" />
            <span>{{ profile.location }}</span>
          </div>
          <div class="detail-item">
            <span class="i-mdi-email-outline text-accent-cyan mr-2" />
            <a :href="`mailto:${profile.email}`" class="hover:text-primary transition-colors">
              {{ profile.email }}
            </a>
          </div>
          <div class="detail-item">
            <span class="i-mdi-circle text-accent-green mr-2" style="font-size: 0.6rem;" />
            <span class="text-accent-green">{{ t('about.available') }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <StatCounter
        v-for="(stat, i) in profile.stats"
        :key="stat.key"
        :value="stat.value"
        :label="t(`about.stats.${stat.key}`)"
        :delay="i * 150"
      />
    </div>
  </SectionWrapper>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 280px 1fr;
    align-items: start;
  }
}

.avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.15;
  filter: blur(20px);
  animation: pulse-glow 3s ease-in-out infinite;
}

.avatar-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 3px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.4);
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed rgba(108, 99, 255, 0.3);
  animation: spin 20s linear infinite;
  z-index: 0;
}

.about-socials {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem !important;
  color: var(--color-text-secondary);
  transition: color 0.2s ease, transform 0.2s ease;
  padding: 0 !important;
}

.social-btn:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}

.about-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.about-bio {
  color: var(--color-text-secondary);
  line-height: 1.9;
  margin-bottom: 1.5rem;
  font-size: 1.025rem;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@keyframes pulse-glow {
  0%, 100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.1); opacity: 0.25; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
