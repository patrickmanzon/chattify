// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */

let app = null


firebase.auth().onAuthStateChanged(user => {

	if(!app){
		app = new Vue({
		  el: '#app',
		  router,
		  components: { App },
		  template: '<App/>'
		})
	}

})

