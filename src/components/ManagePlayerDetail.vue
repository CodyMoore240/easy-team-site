<template lang='html'>
  <div class='playerWrapper'>
    <div v-if='player.name'>
      <label for='name'>Name</label>
      <input type='text' id='name' name='name' v-on:blur='updateAttribute' v-model='player.name'>
    </div>
    <div v-if='player.name' class=''>
      <label for='number'>Number</label>
      <input type='text' id='number' name='number' v-on:blur='updateAttribute' v-model='player.number'>
    </div>
    <button v-on:click='deletePlayer'>Delete Player</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  props: ['player'],
  methods: {
    updateAttribute: function (e) {
      firebase.firestore().collection('players').doc(this.player.id).set({
        [e.target.id]: e.target.value
      }, {merge: true})
      .then(function () {
        console.log('Document successfully written!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
    },
    deletePlayer: function (e) {
      firebase.firestore().collection('players').doc(this.player.id).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
  .playerWrapper{
    padding: 20px;
    border-bottom: 1px black solid;
  }
</style>
