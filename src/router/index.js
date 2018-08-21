import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldJsx from '@/components/HelloWorldJsx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: HelloWorldJsx
    }
  ]
})
