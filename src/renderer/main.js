import Vue from 'vue'
import axios from 'axios'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import store from './store'


// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'


// scripts
global.$ = global.jQuery = require('jquery')
require('bootstrap/dist/js/bootstrap')
require('admin-lte/dist/js/app')
require('admin-lte/plugins/slimScroll/jquery.slimscroll')

// firebase config
firebase.initializeApp({
	apiKey: "AIzaSyCe3qRuap-7rMxBMB7pkkSEluz9pATVCQc",
	authDomain: "mini-mart-a384d.firebaseapp.com",
	databaseURL: "https://mini-mart-a384d.firebaseio.com",
	projectId: "mini-mart-a384d",
	storageBucket: "mini-mart-a384d.appspot.com",
	messagingSenderId: "971590749746"
});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.http = Vue.prototype.$firebase = firebase
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app')
