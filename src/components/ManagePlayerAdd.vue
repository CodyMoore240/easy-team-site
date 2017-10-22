<template lang='html'>
  <div class=''>
    <h2>Add New Player</h2>
    <div>
      <label for='add-name'>Name</label>
      <input type='text' id='add-name' name='add-name' v-model='name'>
    </div>
    <div>
      <label for='add-number'>Number</label>
      <input type='text' id='add-number' name='add-number' v-model='number'>
    </div>
    <button v-on:click='addNewPlayer'>Add New Player</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'add-player',
    data () {
      return {
        name: null,
        number: null
      }
    },
    methods: {
      addNewPlayer: function (e) {
        // send the data to firebase
        firebase.firestore().collection('players').add({
          name: this.name,
          number: this.number
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })

        // clear the data from the form
        this.name = null
        this.number = null
      }
    }
  }
</script>

<style lang='css'>
</style>
