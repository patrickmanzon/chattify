<template>
	<div class="home container">
		<div class="panel">
			<div class="panel-content">
				<ul class="collection with-header">
			        <li class="collection-header"><h4>Select Channel</h4></li>
			        <a href="#!" class="collection-item" v-for="channel in channels" :key="channel.id">{{ channel.channel_name }}</a>
		      	</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import db from '@/firebase/init'
	export default {
		name: 'Home',
		data(){
			return {
				channels: []

			}
		},
		created(){

			db.collection('channels').get()
			.then(snapshot => {

				snapshot.forEach(doc => {
					let channels = doc.data()
					channels.id = doc.id
					this.channels.push(channels)
				})
			})

			// firebase.auth().signOut().then(() => {
			// 	this.$router.push({ name: 'Signup' })
			// })
		}
	}
</script>

<style>
.home{
	margin-top: 60px;
	max-width: 500px;
}
</style>