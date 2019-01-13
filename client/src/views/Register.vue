<template>
  <div>
    <h1>Register</h1>
    <div class="error" v-html="error" v-if="error" />
    <div>
      <input type="text" name="email" v-model="email" placeholder="E-mail" required>
      <input type="text" name="password" v-model="password" placeholder="password" required>
      <button type="submit"  @click="register">register</button>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService'
    export default {
        name: "Register",
      data() {
        return {
          email: '',
          password: '',
          error: null
        }
      },
      methods: {
        async register () {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
            .then(res => {
              console.log(res.data)
              this.error = null
            })
            .catch(err => {
              console.log(err.response.data.error)
              this.error = err.response.data.error
            })
        }
      },
    }
</script>

<style scoped>
  .error {
    color: red;
    margin-bottom: 10px;
  }
</style>
