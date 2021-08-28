import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import Blog2 from '@/components/Blog'
import TowWayBinding from '@/components/TowWayBinding'
import From from '@/components/From'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/2222',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BlogList',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog2/:id',
      name: 'Blog2',
      component: Blog2
    },
    {
      path: '/sss',
      name: 'TowWayBinding',
      component: TowWayBinding
    },
    {
      path: '/',
      name: 'From',
      component: From
    }
  ]
})
