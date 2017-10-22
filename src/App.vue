<template>
  <div id='app'>
    <SiteHeader/>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import SiteHeader from '@/components/SiteHeader'

// setup Firebase
let config = {
  apiKey: 'AIzaSyC__DxahXFEl6xGjQSR_QjLuKlnNCiC8FU',
  authDomain: 'rubberpuckies-60b7f.firebaseapp.com',
  databaseURL: 'https://rubberpuckies-60b7f.firebaseio.com',
  projectId: 'rubberpuckies-60b7f',
  storageBucket: 'rubberpuckies-60b7f.appspot.com',
  messagingSenderId: '336525381351'
}

// initialize firebase app wide
firebase.initializeApp(config)

export default {
  name: 'app',
  components: {
    SiteHeader
  }
}
</script>

<style lang='scss'>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.pageContainer {
  max-width: 1000px;
  margin: 0 auto
}
</style>
