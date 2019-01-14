<template>
    <div class="register">
        <h2>Register</h2><br>
        <input type="text" v-model="email" name="email" placeholder="email"> <br>
        <input type="password" v-model="password" name="password" placeholder="password"><br>
        <button type="submit" @click="register">Register</button>
    </div>
</template>

<script>

import AuthenticationServices from '@/services/AuthenticationServices'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const regis = await AuthenticationServices.register({
        email: this.email,
        password: this.password
      })
      console.log(regis.data)
    }
  }
}
</script>
