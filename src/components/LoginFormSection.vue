<template>

  <!-- Login form section -->
  <form class="log-form-input" @submit.prevent="handleSubmit">
    <div>
      <input type="email" placeholder="Alamat Email" required @input="updateEmail">
    </div>
    <div>
      <input :type="type" placeholder="Password" required @input="updatePassword">
      <span v-on:click="showPass" style="cursor: pointer;">Show Password!</span>
    </div>

    <!-- Btn submit -->
    <div class="log-btn-submit">
      <div class="log-forgot-pass">
        <p v-on:click="forgotPass">lupa password?</p>
      </div>
      <div class="log-button">
        <button>sign in</button>
      </div>
    </div>
    <!-- End btn submit -->
  </form>
  <!-- End login form section -->

</template>

<script>
  export default {
  name: 'LoginFormSection',
  data(){
    return{
      type: 'password'
    }
  },
  // i have struggled about CORS error and also i have tried to search how to solve this error
  // and got a few solutions, starting to add options in header request and add new configuration
  // vue but all of it nothing works, this code below show how do i solve this problem
  // and not only this you can check also in vue.config file

  // mounted(){
  //   fetch('https://www.getpostman.com/collections/97fa50515b797d0ff245', {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => this.$store.commit('getDataUser', data))
  // },
  methods:{
    handleSubmit(){
      if(this.$store.state.login.email || this.$store.state.login.password){
        this.$router.push('/profile')
      }else{
        this.$router.push('/')
      }
    },
    forgotPass(){
      alert('still doens\'t work!')
    },
    updateEmail(e){
      this.$store.commit('updateEmail', e.target.value)
    },
    updatePassword(e){
      this.$store.commit('updatePassword', e.target.value)
    },
    showPass(){
      if(this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    }
  }
}
</script>