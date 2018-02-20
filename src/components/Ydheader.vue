<template>
  <header @click="goHome" class="header-main">
    <h1 class="header-main__title"><span class="y-letter">Y</span>andex disk viewer</h1>
  </header>
</template>

<script>
  export default {
    name: 'Loader',
    methods: {
      goHome () {
        this.$router.push({ path: '/root' });
      }
    }
  }
</script>

<style scoped>
  .header-main {

  }
  .header-main__title {
    background: #f8d530;
    color: #0a0a0a;
    padding: 20px 0 20px 0;
    border-radius: 20px 20px 0 0;
  }
  .y-letter {
    color: #ec674c
  }
</style>
