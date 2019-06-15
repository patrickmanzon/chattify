<template>
	<div class="signin container">
		<form class="card-panel" @submit.prevent="signIn">
			<h3 class="deep-purple-text center">Sign up</h3>
			<div class="field">
				<label for="email">Email:</label>
				<input type="email" name="email" v-model="email">
			</div>
			<div class="field">
				<label for="password">Password:</label>
				<input type="password" name="password" v-model="password">
			</div>
			<p class="red-text center" v-if="feedback">{{ feedback }}</p>
			<div class="field center">
				<button type="submit" class="btn deep-purple">Signup</button>
			</div>
		</form>
	</div>
</template>

<script>
	import db from '@/firebase/init'
	import firebase from 'firebase'
	export default{
		name: 'Signup',
		data(){
			return {
				email : null,
				password : null,
				feedback : null
			}
		},
		methods: {
			signIn(){
				if(this.email && this.password){
					firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(() => {
						this.$router.push({ name: "Home" })
					}).catch(err => {
						this.feedback = err.message
					})
				}else{
					this.feedback = 'Fields are empty'
				}
				
			}
		}
	}
</script>

<style>
	.signin{
		max-width: 400px;
		margin-top: 60px;
	}
</style>