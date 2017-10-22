<template>
  <div id='app'>
    <SiteHeader/>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'

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
