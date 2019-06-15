<template>
<<<<<<< HEAD
    <div class="signup container">
        <form @submit.prevent="signUp" class="card-panel">
            <h3 class="deep-purple-text center">Sign Up</h3>
            <div class="field">
                <label for="email">Name:</label>
                <input type="text" name="name" v-model="name">
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" name="confirm-password" v-model="confirmPassword">
            </div>
            <p class="red-text center" v-if="feedback">
                {{ feedback }}
            </p>
            <div class="field center">
                <button type="submit" class="btn deep-purple">signup</button>
            </div>
        </form>
    </div>
</template>

<script>
    import db from '@/firebase/init'

    export default {
        name: 'Signup',
        data() {
            return {
                name: null,
                email: null,
                password: null,
                confirmPassword: null,
                feedback: null
            }
        },
        methods: {
            signUp() {
                console.log(this.name)
                if(this.password ){

                }

                if(this.name && this.email && this.password) {

                }
            }
        }
    }
</script>

<style>
    .signup{
        max-width: 500px;
        margin-top: 20px;
    }
=======
	<div class="signup container">
		<form class="card-panel" @submit.prevent="signUp">
			<h3 class="deep-purple-text center">Sign up</h3>
			<div class="field">
				<label for="username">Username:</label>
				<input type="text" name="username" v-model="username" @keydown.space.prevent>
			</div>
			<div class="field">
				<label for="email">Email:</label>
				<input type="email" name="email" v-model="email">
			</div>
			<div class="field">
				<label for="password">Password:</label>
				<input type="password" name="password" v-model="password">
			</div>
			<div class="field">
				<label for="password">Confirm Password:</label>
				<input type="password" name="password" v-model="confirmPassword" @keydown="checkPassword">
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
				username : null,
				email : null,
				password : null,
				confirmPassword : null,
				feedback : null
			}
		},
		methods: {
			checkPassword(){
				if(this.password != this.confirmPassword){
					this.feedback = 'passwords do not match'
				}else{
					this.feedback = null
				}
			},

			signUp(){

				if(this.password != this.confirmPassword){
					this.feedback = 'passwords do not match'
					return
				}
				if(this.username && this.username && this.email && this.password){
					
					let ref = db.collection('users').doc(this.username)

					ref.get().then(doc => {

						if(doc.exists){
							this.feedback = 'Username is taken'
						}else{
							firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
							.then(cred => {

								ref.set({
									user_id: cred.user.uid
								}).then(() => {
									
								})
			
							}).catch(err => {
								this.feedback = err.message
							})

						}

					})
				
				
				}else{
					this.feedback = 'Fields are empty'
				}
			}
		}
	}
</script>

<style>
	.signup{
		max-width: 400px;
		margin-top: 60px;
	}
>>>>>>> fbdb8db9b2c74c20b0dc1724719714be5f816e17
</style>