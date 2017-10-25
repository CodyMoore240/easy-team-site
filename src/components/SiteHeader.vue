<template lang='html'>
  <div class='headerWrapper'>
    <div class='logo' v-bind:style='styleObject'>
      Logo
    </div>
  </div>
</template>

<script>
// import firebase
import firebase from 'firebase'

export default {
  data () {
    return {
      // create a style object that will come directly form firebase
      styleObject: {}
    }
  },
  beforeMount () {
    // get the data from firebase and i guess we will make this real time for now
    firebase.firestore().collection('pages').doc('theme').onSnapshot((doc) => {
      this.styleObject = doc.data().logo
    })
  },
  beforeDestroy () {
    // remove the firebase listener
    firebase.firestore().collection('pages').doc('theme').onSnapshot((doc) => {})
  }
}
</script>

<style scoped lang='scss'>
  .headerWrapper {
    background-color: #46628A;
    padding: 10px;
  }

  .logo {
    width: 100px;
  }
</style>
