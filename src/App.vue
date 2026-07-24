<script setup>
import { nextTick, ref } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SideProjectsSection from './components/SideProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import LibraryOverlay from './components/LibraryOverlay.vue'

const libraryOpen = ref(false)

async function navigateFromLibrary(href) {
  libraryOpen.value = false
  await nextTick()
  if (href === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  history.replaceState(null, '', href)
}
</script>

<template>
  <SiteNav
    :library-open="libraryOpen"
    @open-library="libraryOpen = true"
    @navigate="navigateFromLibrary"
  />
  <main>
    <HeroSection />
    <ExperienceSection />
    <SideProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <LibraryOverlay :open="libraryOpen" @close="libraryOpen = false" />
</template>
