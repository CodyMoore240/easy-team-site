<template lang='html'>
  <div class=''>
    <div>{{ message }}</div>
    <div v-for='stat in stats'>
      {{stat}}
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  data () {
    return {
      message: 'testing',
      stats: null
    }
  },
  beforeMount () {
    firebase.firestore().collection('stats').doc('4zPjHAPdY0dVTKDvOT2T')
    .onSnapshot((doc) => {
      this.stats = doc.data()
      console.log(doc.data())
    })
  }
}
</script>

<style scoped lang='scss'>
</style>
