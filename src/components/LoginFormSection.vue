<template>

<form class="log-form-input" @submit.prevent="handleSubmit">
  <div>
    <input type="email" placeholder="Alamat Email" required @input="updateEmail">
  </div>
  <div>
    <input :type="type" placeholder="Password" required @input="updatePassword">
    <span v-on:click="showPass" style="cursor: pointer;">Show Password!</span>
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
      type: 'password'
    }
  },
  // mounted(){
  //   fetch('https://www.getpostman.com/collections/97fa50515b797d0ff245', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
  //       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  //     }
  //   })
  //     .then(res => res.json)
  //     .then(data => this.$store.commit('getDataUser', data))
  // },
  methods:{
    handleSubmit(){
      // console.log(this.$store.state.login)
      // console.log(this.$store.state.login.email)
      // console.log(this.$store.state.login.password)
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
      // this.$store.commit('showPass')
      // if(this.$store.state.login.typePass === "password"){
      //   this.type = "text"
      // }else{
      //   this.type = "password"
      // }
      // console.log(this.$store.state.login.typePass)
    }
  }
}
</script>