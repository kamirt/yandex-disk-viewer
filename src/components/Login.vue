<template lang="html">
  <div class="">
    <input v-model="yalogin" type="text" name="" value="">
    <input v-model="yapass" type="password" name="" value="">
    <button type="button" name="button" @click="login">Login</button>
  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      yalogin: '',
      yapass: ''
    }
  },
  methods: {
    login () {
      let data = {login: this.yalogin, password: this.yapass};
      let me = this;
      this.axios.post('http://127.0.0.1:3000/yadisk-api/login/', data)
      .then(function(response) {
        me.$cookie.set('ydvtoken', response.data.token, { expires: 1 });
        me.$emit('success', response.data.token);
      })
      .catch(function(error){
        console.log(error)
      });
    }
  }
}
</script>

<style scoped lang="css">
</style>
