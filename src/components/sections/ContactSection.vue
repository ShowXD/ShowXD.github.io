<script setup lang="ts">
import SectionWrapper from '@/components/common/SectionWrapper.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import { socialLinks } from '@/data/social'
import { profile } from '@/data/profile'
</script>

<template>
  <SectionWrapper
    id="contact"
    title="Get In Touch"
    subtitle="Have a project in mind? I'd love to hear from you."
  >
    <div class="contact-grid">
      <div class="contact-info">
        <p class="info-text">
          I'm currently open to new opportunities — whether it's a full-time role,
          freelance project, or just a friendly conversation about tech. My inbox is always open!
        </p>

        <div class="contact-details">
          <a :href="`mailto:${profile.email}`" class="contact-detail-item">
            <div class="detail-icon">
              <span class="i-mdi-email-outline text-primary" />
            </div>
            <div>
              <p class="detail-label">Email</p>
              <p class="detail-value">{{ profile.email }}</p>
            </div>
          </a>
          <div class="contact-detail-item">
            <div class="detail-icon">
              <span class="i-mdi-map-marker-outline text-primary" />
            </div>
            <div>
              <p class="detail-label">Location</p>
              <p class="detail-value">{{ profile.location }}</p>
            </div>
          </div>
        </div>

        <div class="social-section">
          <p class="social-title">
            Find me on
          </p>
          <div class="social-links">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :aria-label="link.name"
              class="social-card glass-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span :class="link.icon" class="text-2xl" />
              <span class="social-name">{{ link.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  </SectionWrapper>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.2fr;
    align-items: start;
  }
}

.info-text {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.contact-detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

a.contact-detail-item:hover {
  transform: translateX(4px);
}

.detail-icon {
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  background: rgba(108, 99, 255, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.detail-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.detail-value {
  font-size: 0.925rem;
  color: var(--color-text-primary);
}

.social-title {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  margin-bottom: 1rem;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.social-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.75rem !important;
  color: var(--color-text-secondary);
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-card:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}

.social-name {
  font-size: 0.75rem;
  font-weight: 500;
}
</style>
