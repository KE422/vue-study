<template>
  <div id="app">
    <!-- modal -->
    <!-- TODO <Modal /> -->

    <!-- nav bar -->
    <NavBar />
    
    <div>
      <router-view />
    </div>
    
    <!-- contents -->
    <Contents />

  </div>
</template>

<script>
import posts from './assets/data.js'
import NavBar from './components/NavBar.vue'
import Contents from './components/product/Contents.vue'
// import Modal from './components/product/Modal.vue'

export default {
  name: 'App',
  // 데이터 보관함 (state)
  data() {
    return {
      // 데이터 입력 (state)
      is_open: [false],
      posts: posts,
    }
  },
  components: {
    NavBar,
    Contents,
    // Modal,
  },
  methods: {
    // 함수 입력
    showModal(i) {
      this.is_open[i] = !this.is_open[i];
    }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
