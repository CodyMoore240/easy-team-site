<template lang="html">
  <div class="">
    <div>{{ message }}</div>
    <div v-for="stat in stats">
      {{stat}}
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      message: 'testing',
      stats: null
    }
  },
  mounted () {
    // create a listener that updates vue whenever firebase changes
    firebase.database().ref('stats').on('value', snapshot => {
      this.stats = snapshot.val()
    })
  },
  beforeDestroy () {
    // remove the firebase listener
    firebase.database().ref('stats').off()
  }
}
</script>

<style scoped lang="scss">
</style>
