<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types'

const { t } = useI18n()
defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <div class="card-image-wrapper">
      <img
        :src="project.image"
        :alt="project.title"
        class="card-image"
        loading="lazy"
      />
      <div class="card-overlay">
        <div class="card-actions">
          <a
            v-if="project.github"
            :href="project.github"
            :aria-label="t('projects.view_source')"
            class="action-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="i-simple-icons-github text-lg" />
          </a>
          <a
            v-if="project.demo && project.demo !== '#'"
            :href="project.demo"
            :aria-label="t('projects.view_demo')"
            class="action-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="i-mdi-open-in-new text-lg" />
          </a>
        </div>
      </div>
      <div v-if="project.featured" class="featured-badge">
        <span class="i-mdi-star text-xs mr-1" />{{ t('projects.featured') }}
      </div>
    </div>

    <div class="card-content">
      <h3 class="card-title">
        {{ project.title }}
      </h3>
      <p class="card-desc">
        {{ t(`projects.items.${project.id}.description`) }}
      </p>
      <div class="card-tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tech-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: rgba(18, 18, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  transform-style: preserve-3d;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(108, 99, 255, 0.4);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(108, 99, 255, 0.1);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(108, 99, 255, 0.6), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.card-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}

.action-btn:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.featured-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--gradient-primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.card-desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
