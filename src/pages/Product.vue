<template>
  <div id="product">
    Here I studied about states of vue.js by importing data from static js file.
    <br />
    If you click any of the products below, it will continue to detail page.
  </div>
  <Contents :posts="posts" />
</template>

<script>
import Contents from '@/components/product/Contents.vue'
import posts from '@/assets/data.js'

export default {
  name: 'ProductPage',
  components: {
    Contents,
  },
  data() {
    return {
      posts: posts,
    }
  },
}
</script>

<style>
  #product {
    padding: 20px 0;
  }
</style>