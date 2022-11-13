<template>

  <form class="res-form-input" @submit.prevent="handleSubmit">
    <div>
      <input type="email" placeholder="Alamat Email" required>
    </div>
    <div>
      <input type="tel" placeholder="Nomor HP" required pattern="+62[0-9]{10}">
    </div>
    <div>
      <input type="text" placeholder="Nama Panggilan Laki-Laki" required>
    </div>
    <div>
      <input type="text" placeholder="Nama Panggilan Perempuan" required>
    </div>
    <div>
      <input :type="type" placeholder="Password" required>
      <span v-on:click="showPass" style="cursor: pointer;">Show password!</span>
    </div>

    <div class="res-button">
      <button>buat undanganmu sekarang <span><v-icon name="bi-arrow-right" scale="1.3" /></span></button>
    </div>
  </form>
  
  </template>
  
  <script>
    export default {
    name: 'RegisterFormSection',
    data(){
      return{
        type: 'password',
      }
    },
    methods:{
      // handleSubmit(){
      //   console.log(this.email)
      //   console.log(this.nomor_hp)
      //   console.log(this.p_l)
      //   console.log(this.p_p)
      //   console.log(this.password)
      // },
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