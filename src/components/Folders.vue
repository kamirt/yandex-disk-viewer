<template>
  <main>
    <div class="toolbar">
      <span @click="historyBack" v-if="needArrow" class="arrow-back"><img src="static/img/back.png" alt=""></span>
    </div>
    <div v-if="token" class="folder-container">
        <div v-if="groupedItems" v-for="row in groupedItems" class="row">
          <div v-for="items in row" class="col-md-4">
            <div class="col-sm-12 row-item">
              <div v-for="item in items" class="item-container">
                <figure class="item-box" @click="toFolder(item)">
                  <img class="item-img" :src="getIcon(item)" alt="">
                  <figcaption class="item-caption">
                    {{ item.displayName }}
                    <span class="item-caption__date">{{ item.creationDate | moment("from", "now") }}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="sorry" v-if="!groupedItems.length">
          Нет файлов =(
        </div>
      <transition name="fade">
        <shadow-container v-if="loading" loader="true" />
        <shadow-container v-if="errorMes" :error="errorMes" />
      </transition>
    </div>
    <login v-else @success="updateView" />
    </div>
  </main>
</template>

<script>
import Login from './Login'
import Shadow from './Shadow'

export default {
  name: 'Folders',
  components: {
    login: Login,
    shadowContainer: Shadow,
  },
  data () {
    return {
      token: this.$cookie.get('ydvtoken'),
      needArrow: this.$router.history.current.fullPath != '/root'
    }
  },
  computed: {
    items () {
      return this.$store.getters['folders/getItems']
    },
    groupedItems () {
      let res = [],
          inRow = 6,
          inCol = 2,
          items = this.items,
          iter = 0;
      if (!items) return [];
      for(let row = 0; row < Math.floor(items.length / inRow); row++){
        res.push([])
        for(let it = 0; it < inRow/inCol; it++) {
          res[row].push([])
          for (let i = 0; i < inCol; i++) {
            if(items[it+iter]){
              res[row][it].push(items[it+iter])
            }
            iter+=inRow
          }
        }
      }
      return res
    },
    loading () {
      return this.$store.getters['folders/getLoader']
    },
    errorMes () {
      return this.$store.getters['folders/getError']
    },
  },
  created () {
      if(this.token){
        let folder = this.$router.history.current.fullPath
        folder = folder === '/' ? 'root' : folder
        this.$store.dispatch('folders/askItems', {folder: folder, session: this.token});
      }
  },
  watch: {
    '$route' (to, from) {
      let folder = to.path === '/' ? 'root' : to.path;
      this.$store.dispatch('folders/askItems', {folder: folder, session: this.token});
      this.needArrow = this.$router.history.current.fullPath != '/root'
    }
  },
  methods: {
    updateView (token) {
      this.token = token;
      this.$router.push({ path: 'root' });
    },
    getIcon (item) {
      return item.isDir ? "static/img/folder-flat.png" : "static/img/document-file-icon.png"
    },
    toFolder (item) {
      if (item.isDir) {
        let folder = item.href
        this.$router.push({ path: folder });
      }
    },
    historyBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      }
    }
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
  .toolbar {
    height: 70px;
    text-align: left;
  }
  .arrow-back {
    display: block;
    border-radius: 25px;
    border: 1px solid grey;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  .arrow-back img {
    width: 100%;
  }
</style>
