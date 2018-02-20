<template>
<div class="container">
  <yd-header />
  <folders />
</div>
</template>

<script>
import Folders from './Folders'
import Ydheader from './Ydheader'

export default {
  name: 'Main',
  components: {
    folders: Folders,
    ydHeader: Ydheader
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.row-item {
  text-align: left;
}
.item-container {
  display: inline-block;
  text-align: center;
  width: 50%;
}
.item-box {
  margin: 0 0 30px 0;
  padding: 5px 0 5px 0;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.item-box:hover {
  background: #ececec;;
}
.item-img {
  width: 50px;
  height: 50px;
}
.item-caption {
  font-size: 0.85rem
}
.item-caption__date {
  margin: 5px 0 0 0;
  display: block;
  color: grey;
  font-size: 0.75rem
}
.sorry {
  color: grey;
}
</style>
