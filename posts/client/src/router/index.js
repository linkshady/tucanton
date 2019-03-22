import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import EquipmentSearch from '@/components/EquipmentSearch'
import GetClients from '@/components/GetClients'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/clientes',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/usuarios/:id',
      name: 'EquipmentSearch',
      component: EquipmentSearch
    },
    {
      path: '/getClients/:equipo_id/:usuario_id',
      name: 'GetClients',
      component: GetClients
    }
  ]
})
