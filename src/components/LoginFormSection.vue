<template>

<form class="log-form-input" @submit.prevent="handleSubmit">
  <div>
    <input type="email" placeholder="Alamat Email" required v-model="email">
  </div>
  <div>
    <input type="password" placeholder="Password" required v-model="password">
    <span v-on:click="showPass">Show password!</span>
  </div>

  <div class="log-btn-submit">
    <div class="log-forgot-pass">
      <p v-on:click="forgotPass">lupa password?</p>
    </div>
    <div class="log-button">
      <button>sign in</button>
    </div>
  </div>
</form>

</template>

<script>
  export default {
  name: 'LoginFormSection',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.email)
    },
    forgotPass(){
      alert('still doens\'t work!')
    },
    showPass(){
      alert('ok')
    }
  }
}
</script>