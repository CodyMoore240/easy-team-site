// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
