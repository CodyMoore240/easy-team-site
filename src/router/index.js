import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import StatsPage from '@/components/StatsPage'
// import HelloWorld from '@/components/HelloWorld'

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
    }
  ]
})
