<template>

  <div>
    <div>
      <div class="login-item row">
        <div class="log col-md-6">
          <div class="log-judul">
            <h3>sign in</h3>
            <p>Masuk, dan buat undangan pernikahan kamu, kemudian share undangan kamu,</p>
          </div>
            <LoginFormSection />
        </div>
        <div class="reg-judul col-md-6">
          <h3>daftar</h3>
          <p>Buat Undangan Pernikahan Digital Kamu dengan elegan, <br /><span style="font-weight: bold;">your alternative wedding invitation</span></p>
          <RegisterFormSection />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import LoginFormSection from "./LoginFormSection.vue";
import RegisterFormSection from "./RegisterFormSection.vue";


export default {
  name: 'LoginContentSection',
  components: {
    LoginFormSection,
    RegisterFormSection
  }
}
</script>