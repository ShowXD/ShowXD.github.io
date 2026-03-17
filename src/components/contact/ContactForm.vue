<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const FORMSPREE_URL = 'https://formspree.io/f/mnjggere'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errors = reactive({ name: '', email: '', message: '' })

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = t('contact.form.err_name')
    valid = false
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(form.email)) {
    errors.email = t('contact.form.err_email')
    valid = false
  }
  if (!form.message.trim() || form.message.length < 10) {
    errors.message = t('contact.form.err_message')
    valid = false
  }

  return valid
}

async function onSubmit() {
  if (!validate()) return

  status.value = 'sending'
  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    }
    else {
      status.value = 'error'
    }
  }
  catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form
    class="contact-form glass-card p-8"
    novalidate
    @submit.prevent="onSubmit"
  >
    <h3 class="form-title">
      {{ t('contact.form.title') }}
    </h3>

    <div class="field">
      <label for="name" class="field-label">{{ t('contact.form.name') }}</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="field-input"
        :class="{ error: errors.name }"
        :placeholder="t('contact.form.name_placeholder')"
        autocomplete="name"
      />
      <p v-if="errors.name" class="field-error">
        {{ errors.name }}
      </p>
    </div>

    <div class="field">
      <label for="email" class="field-label">{{ t('contact.form.email') }}</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="field-input"
        :class="{ error: errors.email }"
        :placeholder="t('contact.form.email_placeholder')"
        autocomplete="email"
      />
      <p v-if="errors.email" class="field-error">
        {{ errors.email }}
      </p>
    </div>

    <div class="field">
      <label for="message" class="field-label">{{ t('contact.form.message') }}</label>
      <textarea
        id="message"
        v-model="form.message"
        class="field-input field-textarea"
        :class="{ error: errors.message }"
        :placeholder="t('contact.form.message_placeholder')"
        rows="5"
      />
      <p v-if="errors.message" class="field-error">
        {{ errors.message }}
      </p>
    </div>

    <button
      type="submit"
      class="submit-btn"
      :disabled="status === 'sending'"
    >
      <span v-if="status === 'sending'" class="i-mdi-loading animate-spin mr-2" />
      <span v-else class="i-mdi-send-outline mr-2" />
      {{ status === 'sending' ? t('contact.form.submitting') : t('contact.form.submit') }}
    </button>

    <Transition name="fade">
      <p v-if="status === 'success'" class="status-msg success">
        <span class="i-mdi-check-circle-outline mr-2" />
        {{ t('contact.form.success') }}
      </p>
      <p v-else-if="status === 'error'" class="status-msg error">
        <span class="i-mdi-alert-circle-outline mr-2" />
        {{ t('contact.form.error') }}
      </p>
    </Transition>
  </form>
</template>

<style scoped>
.form-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.field-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.field-input {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--color-text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 0.925rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  outline: none;
}

.field-input:focus {
  border-color: rgba(108, 99, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
}

.field-input.error {
  border-color: rgba(255, 107, 157, 0.6);
}

.field-input::placeholder {
  color: var(--color-text-muted);
}

.field-textarea {
  resize: vertical;
  min-height: 120px;
}

.field-error {
  font-size: 0.8rem;
  color: var(--color-accent-pink);
}

.submit-btn {
  width: 100%;
  padding: 0.875rem;
  border-radius: 0.875rem;
  border: none;
  background: var(--gradient-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-msg {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
}

.status-msg.success {
  background: rgba(67, 233, 123, 0.1);
  color: var(--color-accent-green);
  border: 1px solid rgba(67, 233, 123, 0.2);
}

.status-msg.error {
  background: rgba(255, 107, 157, 0.1);
  color: var(--color-accent-pink);
  border: 1px solid rgba(255, 107, 157, 0.2);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
