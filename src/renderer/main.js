import Vue from 'vue'
import axios from 'axios'

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
// custom adminlte 
var AdminLTEOptions = {
	sidebarExpandOnHover: false,
	enableBoxRefresh: true,
	enableBSToppltip: true,
	navbarMenuSlimscroll: true,
	sidebarSlimScroll: true,
	animationSpeed: 300,
	enableFastclick: true,
};

require('admin-lte/plugins/fastclick/fastclick.min')
require('admin-lte/dist/js/app')
require('admin-lte/plugins/slimScroll/jquery.slimscroll')


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// import firebase sdk
// ???
Vue.http = Vue.prototype.$firebase = firebase
import * as firebase from 'firebase'
// firebase config
firebase.initializeApp({
	apiKey: "AIzaSyCe3qRuap-7rMxBMB7pkkSEluz9pATVCQc",
	authDomain: "mini-mart-a384d.firebaseapp.com",
	databaseURL: "https://mini-mart-a384d.firebaseio.com",
	projectId: "mini-mart-a384d",
	storageBucket: "mini-mart-a384d.appspot.com",
	messagingSenderId: "971590749746"
});
// cau tr
// Get a reference to the database service
// the local copies that we will serve up to the components
// var unitsRef = firebase.database().ref('units')
// var productRef = firebase.database().ref('products')
// // watch the changing in our database and update our local copies 
// // with the snapshot of that data 
// // attaching a listener to the root of database is not recommended.
// unitsRef.on('value', function (snapshot) {
// 	// if snapshot.val() = null, this means the units references has no changed
// 	if (snapshot.val()) {
// 		unitsRef = snapshot.val()
// 	}
// })
// tao de trong nay co dc ko hay phai de o component?
// t cũng k biet co nen de trong nay k nua

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app')
