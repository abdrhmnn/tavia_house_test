<template>

  <!-- Profile content section -->
  <div class="cont-profile-sect">
    <!-- Email section -->
    <div class="email-profile-sect">
      <p>Email</p>
      <input type="text" name="" id="" value="aguungtriii@gmail.com">
      <div class="email-verified">
        <span>
          <v-icon name="bi-check-circle" scale="1.1" fill="#34BE5B" />
        </span>
        <span>Verified</span>
      </div>
    </div>
    <!-- End email section -->

    <!-- Nomer hp section -->
    <div class="nomer-profile-sect">
      <p>Nomer Handphone</p>
      <input type="text" name="" id="" value="+6281282074646">
      <div class="nomer-verified">
        <span>
          <v-icon name="bi-x-circle" scale="1.1" fill="#D35959" />
        </span>
        <span>Not Verified</span>
      </div>
    </div>
    <!-- End nomer hp section -->
  </div>
  <!-- End profile content section -->

  <!-- Log out button -->
  <div v-on:click="logout" class="log-out">
    <span>
      <v-icon name="ri-logout-circle-r-line" scale="1.1" fill="#707C97" />
    </span>
    <span>log out</span>
  </div>
  <!-- Eng log out button -->

</template>

<script>
export default {
  name: 'ProfileContentSection',
  methods: {
    logout(){
      this.$router.push('/')
    }
  }
}
</script>