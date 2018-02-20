<template>
  <div class="shadow-container">
    <loader v-if="loader" />
    <error v-if="error" />
  </div>
</template>

<script>
import Loader from './Loader'
import ErrorMes from './Error'

export default {
  name: 'Shadow',
  props: ['loader', 'error'],
  components: {
    error: ErrorMes,
    loader: Loader
  }
}


</script>

<style scoped>
  .shadow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
  }
</style>
