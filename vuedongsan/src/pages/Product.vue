<template>
  <Contents />
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
  methods: {
    viewDetail() {
      // go to detail page
    }
  }
}
</script>