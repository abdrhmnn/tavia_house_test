<template>
  <HeaderSection />
  <LoginContentSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import LoginContentSection from './components/LoginContentSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    LoginContentSection
  }
}
</script>
