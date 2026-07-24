<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { collections } from '../data/resume.js'

const props = defineProps({ open: Boolean })
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  }
)
</script>

<template>
  <Transition name="library">
    <div v-if="open" class="library" aria-label="My AI Library">
      <div class="library-inner">
        <h2 class="section-title">My AI Library.</h2>

        <div v-if="!collections.length" class="library-empty">
          <p class="library-empty-title">Still curating.</p>
          <p class="library-empty-note">
            I'm putting together the AI tools, reads, and demos worth sharing.
            Check back soon.
          </p>
        </div>

        <div v-else class="collections-grid">
          <div v-for="group in collections" :key="group.title" class="collection-group">
            <h3 class="collection-title">
              <span class="chip" :class="group.chip">{{ group.items.length }}</span>
              {{ group.title }}
            </h3>

            <a
              v-for="item in group.items"
              :key="item.url"
              class="collection-item"
              :href="item.url"
              target="_blank"
              rel="noopener"
            >
              <span class="collection-item-title">{{ item.title }} <span class="arrow">↗</span></span>
              <span class="collection-item-note">{{ item.note }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.library {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: var(--bg-alt);
  overflow-y: auto;
  overscroll-behavior: contain;
}

.library-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 110px 22px;
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: start;
}

.library-empty {
  max-width: 460px;
  margin-top: 48px;
}

.library-empty-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}

.library-empty-note {
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.collection-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

.collection-item {
  display: block;
  background: var(--card-bg);
  border: 1px solid var(--ink-border);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  padding: 16px 18px;
  margin-bottom: 14px;
  color: var(--text);
  transition:
    transform 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out);
}

.collection-item:hover {
  text-decoration: none;
  transform: translateY(-3px);
  box-shadow: var(--shadow-lift);
}

.collection-item-title {
  display: block;
  font-size: 15px;
  font-weight: 600;
}

.collection-item .arrow {
  color: var(--link);
  font-weight: 700;
}

.collection-item-note {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.45;
  color: var(--text-secondary);
}

/* enter / leave — separate-page feel: fade ground, lift content in */
.library-enter-active,
.library-leave-active {
  transition: opacity 0.3s var(--ease-out);
}

.library-enter-active .library-inner {
  transition:
    opacity 0.45s var(--ease-out) 0.05s,
    transform 0.45s var(--ease-out) 0.05s;
}

.library-enter-from,
.library-leave-to {
  opacity: 0;
}

.library-enter-from .library-inner {
  opacity: 0;
  transform: translateY(24px);
}

@media (prefers-reduced-motion: reduce) {
  .library-enter-active,
  .library-leave-active,
  .library-enter-active .library-inner {
    transition: none;
  }
}

@media (max-width: 900px) {
  .collections-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 734px) {
  .library-inner {
    padding: 88px 20px 72px;
  }
}
</style>
