<template>
  <HeaderSection />
  <LoginContentSection />
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import LoginContentSection from './LoginContentSection.vue'

export default {
  name: 'LoginPage',
  components: {
    HeaderSection,
    LoginContentSection
  }
}
</script>
