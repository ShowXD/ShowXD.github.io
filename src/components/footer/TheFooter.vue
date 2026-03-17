<script setup lang="ts">
import { socialLinks } from '@/data/social'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container-section">
      <div class="footer-inner">
        <p class="footer-text">
          <span class="gradient-primary font-600">ShowXD</span>
          &copy; {{ currentYear }} — Built with Vue 3, UnoCSS & ☕
        </p>
        <div class="footer-links" role="list" aria-label="Social links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span :class="link.icon" class="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2rem 0;
  background: var(--color-bg);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-text {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: var(--color-text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
}

.footer-link:hover {
  color: var(--color-primary);
  transform: translateY(-2px);
}
</style>
