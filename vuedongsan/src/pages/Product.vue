<template>
  <Contents :posts="posts" />
</template>

<script>
import Contents from '@/components/product/Contents.vue'
// import Detail from '@/components/product/Detail.vue'

import posts from '@/assets/data.js'

export default {
  name: 'ProductPage',
  components: {
    Contents,
    // Detail,
  },
  data() {
    return {
      posts: posts,
    }
  },
}
</script>