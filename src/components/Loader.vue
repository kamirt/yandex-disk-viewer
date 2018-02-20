<template>
  <div class="loader">
  </div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
  .loader {
    position: absolute;
    top: calc( 50% - 100px);
    left: calc( 50% - 100px );
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: no-repeat url("../../static/img/loader.gif") center center;
  }
</style>
