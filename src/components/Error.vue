<template>
  <div class="error-message">{{ message }}</div>
</template>

<script>
  export default {
    name: 'Error',
    computed: {
      message () {
        return this.$store.getters['folders/getError']
      }
    }
  }
</script>

<style scoped>
  .error-message {
    position: absolute;
    left: 30%;
    top: 45%;
    background: white;
    width: 40%;
    padding: 10px;
    border-radius: 10px;
    color: #ff5821;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  }
</style>
