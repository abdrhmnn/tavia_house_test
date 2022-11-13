<template>

  <HeaderSection />
  <div class="cont-img-profile">
    <div class="img-profile">
      <div>
        <img src="../assets/img_profile.png" alt="Img Profile" class="rounded-circle">
      </div>
      <div><p>agung & isti</p></div>
    </div>
  </div>
  <ProfileContentSection />
  <!-- <router-link to="/">Kembali</router-link> -->

</template>

<script>
import HeaderSection from './HeaderSection.vue';
import ProfileContentSection from './ProfileContentSection.vue';

export default {
  name: 'ProfileSection',
  components: {
    HeaderSection,
    ProfileContentSection
  }
}
</script>