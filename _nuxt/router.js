'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _099e9c36 = () => import('E:\\4_studyDemo\\nuxtJs\\games\\pages\\index.vue' /* webpackChunkName: "pages/index" */)

const _2d5027b6 = () => import('E:\\4_studyDemo\\nuxtJs\\games\\pages\\content\\index.vue' /* webpackChunkName: "pages/content" */)

const _181e2713 = () => import('E:\\4_studyDemo\\nuxtJs\\games\\pages\\content\\status-second.vue' /* webpackChunkName: "pages/content-status-second" */)

const _73686d52 = () => import('E:\\4_studyDemo\\nuxtJs\\games\\pages\\content\\status-one.vue' /* webpackChunkName: "pages/content-status-one" */)

const _1f12c598 = () => import('E:\\4_studyDemo\\nuxtJs\\games\\pages\\content\\status-third.vue' /* webpackChunkName: "pages/content-status-third" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _099e9c36,
			name: "index"
		},
		{
			path: "/content",
			component: _2d5027b6,
			name: "content"
		},
		{
			path: "/content/status-second",
			component: _181e2713,
			name: "content-status-second"
		},
		{
			path: "/content/status-one",
			component: _73686d52,
			name: "content-status-one"
		},
		{
			path: "/content/status-third",
			component: _1f12c598,
			name: "content-status-third"
		}
    ]
  })
}
