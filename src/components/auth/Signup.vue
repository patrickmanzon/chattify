<template>
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
</style>