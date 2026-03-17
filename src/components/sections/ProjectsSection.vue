<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionWrapper from '@/components/common/SectionWrapper.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import { projects, projectCategories } from '@/data/projects'

const activeFilter = ref('all')

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value),
)
</script>

<template>
  <SectionWrapper
    id="projects"
    title="Projects"
    subtitle="A selection of things I've built — from side projects to production apps."
  >
    <div class="project-filters">
      <button
        v-for="cat in projectCategories"
        :key="cat.key"
        class="filter-btn"
        :class="{ active: activeFilter === cat.key }"
        @click="activeFilter = cat.key"
      >
        {{ cat.label }}
      </button>
    </div>

    <TransitionGroup name="project-grid" tag="div" class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </TransitionGroup>
  </SectionWrapper>
</template>

<style scoped>
.project-filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
  padding: 0.4rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: rgba(108, 99, 255, 0.4);
  color: var(--color-text-primary);
}

.filter-btn.active {
  background: rgba(108, 99, 255, 0.15);
  border-color: rgba(108, 99, 255, 0.5);
  color: var(--color-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-grid-enter-active {
  transition: all 0.4s ease;
}
.project-grid-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}
.project-grid-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.project-grid-move {
  transition: transform 0.4s ease;
}
</style>
