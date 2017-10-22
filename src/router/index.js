import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import StatsPage from '@/components/StatsPage'
import PlayersPage from '@/components/PlayersPage'
import ManagePlayersPage from '@/components/ManagePlayersPage'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/stats',
      name: 'Stats',
      component: StatsPage
    },
    {
      path: '/players',
      name: 'Players',
      component: PlayersPage
    },
    {
      path: '/admin/manage-players',
      name: 'Manage Players',
      component: ManagePlayersPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // check if the route we are going to requires authentication
  if (requiresAuth) {
    // check if the user is logged in
    if (!currentUser) {
      // send the user to the login page
      next('login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
