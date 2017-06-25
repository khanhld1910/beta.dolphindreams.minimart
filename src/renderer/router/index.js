import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			components: {
				header: require('@/components/Layout/Header'),
				sidebar: require('@/components/Layout/Sidebar'),
				content: require('@/components/Layout/Content'),
				footer: require('@/components/Layout/Footer'),
				modal: require('@/components/Layout/Modal')
			},
			children: [
				{
					path: 'product',
					component: require('@/components/Product')					
				}
			]
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
