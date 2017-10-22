<template lang="html">
  <div class="loginPageContainer pageContainer">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="password">
    <button v-on:click="signIn">Login</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('I did it! We are in!')
          },
          function (err) {
            alert(`Something has gone horribly wrong! ${err.message}`)
          }
        )
      }
    }
  }
</script>

<style lang="scss">
</style>
