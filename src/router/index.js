import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import StatsPage from '@/components/StatsPage'
import PlayersPage from '@/components/PlayersPage'
import ManagePlayersPage from '@/components/ManagePlayersPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
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
      component: ManagePlayersPage
    }
  ]
})
