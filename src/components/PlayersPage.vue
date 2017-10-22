<template lang="html">
  <div class="pageContainer">
    <h1>PlayersPage</h1>
    <div v-for='player in players'>
      <p>{{player.name}} {{player.number}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      players: null
    }
  },
  beforeMount () {
    firebase.firestore().collection('players').onSnapshot((querySnapshot) => {
      let playersArray = []
      querySnapshot.forEach((doc) => {
        playersArray.push(doc.data())
      })
      this.players = playersArray
      // console.log(doc.data())
    })
  // },
  // beforeDestroy () {
  //
  }
}
</script>

<style scoped lang="scss">
  .pageContainer {
    margin-top: 20px;
  }
</style>
