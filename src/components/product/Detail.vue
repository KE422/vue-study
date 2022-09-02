<template>
  <div id="detail">
      This is Detail Page of product #{{ id }}
    <h4 id="title">{{ post?.title }}</h4>
    <img :src="post?.image" alt="원룸이미지" />
    <h5 id="content">{{ post?.content }}</h5>
  </div>
</template>

<script>

export default {
    name: 'DetailPage',
    computed: {
        id() {
            return this.$route.params.id;
        },
        post() {
            if (this.$route.params.post)
             return JSON.parse(this.$route.params.post);
            return null;
        }
    },
}
</script>

<style>
    #detail {
        padding: 20px 0;
        border: none;
    }

    img {
        width: 80%;
    }
</style>