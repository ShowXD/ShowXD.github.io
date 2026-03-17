<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionWrapper from '@/components/common/SectionWrapper.vue'
import SkillBar from '@/components/skills/SkillBar.vue'
import { skills, skillCategories } from '@/data/skills'

const { t } = useI18n()
const activeCategory = ref<string>('all')

const filteredSkills = computed(() =>
  activeCategory.value === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory.value),
)
</script>

<template>
  <SectionWrapper
    id="skills"
    :title="t('skills.title')"
    :subtitle="t('skills.subtitle')"
    dark
  >
    <div class="skill-filters">
      <button
        v-for="cat in skillCategories"
        :key="cat.key"
        class="filter-btn"
        :class="{ active: activeCategory === cat.key }"
        @click="activeCategory = cat.key"
      >
        {{ t(`skills.categories.${cat.key}`) }}
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <div :key="activeCategory" class="skills-grid">
        <SkillBar
          v-for="skill in filteredSkills"
          :key="skill.name"
          :skill="skill"
        />
      </div>
    </Transition>
  </SectionWrapper>
</template>

<style scoped>
.skill-filters {
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

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
