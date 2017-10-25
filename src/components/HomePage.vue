
<template>
  <div class="homePageContainer pageContainer">
    <div class="heroImageContainer" v-bind:style='{ backgroundImage: `url(${heroImageURL})` }'>
    </div>
    <div class="gameRecapSection" v-html="pageTextHTML"></div>
  </div>
</template>

<script>
// import firebase
import firebase from 'firebase'

export default {
  data () {
    return {
      heroImageURL: null,
      pageTextHTML: '<p>No Updates</p>'
    }
  },
  beforeMount () {
    // get the data from firebase and i guess we will make this real time for now
    firebase.firestore().collection('pages').doc('homePage').onSnapshot((doc) => {
      this.heroImageURL = doc.data().heroImageURL
      this.pageTextHTML = doc.data().text
    })
  },
  beforeDestroy () {
    // remove the firebase listener
    firebase.firestore().collection('pages').doc('homePage').onSnapshot((doc) => {})
  }
}
</script>

<style scoped lang="scss">
  .gameRecapSection {
    padding: 20px;
  }

  .heroImageContainer {
    height: 300px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
