import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import share from '@/components/share'
import mycenter from '@/components/mycenter'
import analysis from '@/components/analysis'
import activity from '@/components/activity'
import complaint from '@/components/complaint'
import baidu from '@/components/baidu'
import Nostart from '@/components/SecPages/Nostart'
import areas from '@/components/area/areas'
import three from '@/components/area/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/share',
      name: 'share',
      component: share
    },{
      path: '/mycenter',
      name: 'mycenter',
      component: mycenter
    },{
      path: '/analysis',
      name: 'analysis',
      component: analysis,
      children :[{
      	  path: ':type',
		      name: 'Nostart',
		      component: Nostart
      }]
    },{
      path: '/activity',
      name: 'activity',
      component: activity,
    },{
      path: '/complaint',
      name: 'complaint',
      component: complaint
    },{
      path: '/baidu',
      name: 'baidu',
      component: baidu
    },{
      path: '/:type',
      name: 'areas',
      component: areas,
      children :[{
      	  path: ':type',
		      name: 'three',
		      component: three
      }]
    },{
    	path: '*',
    	redirect :'/home'
    }
    
  ]
})
