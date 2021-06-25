import Vue from 'vue'
import Router from 'vue-router'
import PartJS from '@/components/PartJS'
import Home from '@/components/Home'
import ShowArticle from '@/components/ShowArticle'
import PartReact from '@/components/PartReact'
import PartVue from '@/components/PartVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/JS',
      name: 'JS',
      component: PartJS
    },
    {
      path: '/React',
      name: 'React',
      component: PartReact
    },
    {
      path: '/Vue',
      name: 'Vue',
      component: PartVue
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: ShowArticle
    }
  ],
  mode: 'history'
})
