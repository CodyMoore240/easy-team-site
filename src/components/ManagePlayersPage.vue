<template lang="html">
  <div class="pageContainer">
    <h1>Manage Players</h1>
    <div v-for='player in players'>
      <PlayerDetail :player="player"></PlayerDetail>
    </div>
    <AddPlayer></AddPlayer>
  </div>
</template>

<script>
// import firebase
import firebase from 'firebase'
import 'firebase/firestore'

// import components
import PlayerDetail from '@/components/ManagePlayerDetail'
import AddPlayer from '@/components/ManagePlayerAdd'

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
        let playerObj = doc.data()
        playerObj.id = doc.id
        playersArray.push(playerObj)
      })
      this.players = playersArray
    })
  },
  components: {
    PlayerDetail,
    AddPlayer
  }
}
</script>

<style scoped lang="scss">
  .pageContainer {
    margin-top: 20px;
  }
</style>
