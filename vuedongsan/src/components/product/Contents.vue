<template>
    <div id="contents"
          v-for="post in posts"
          :key="post.id"
          @click="viewDetails(post.id)"
    >
      <img alt="원룸이미지" :src="posts[post.id].image" class="room-img" />
      <h4 class="blue" :style="blue">{{ posts[post.id].title }}</h4>
      <h4>{{ posts[post.id].price.toLocaleString('ko-KR') }} 원</h4>
    </div>
</template>

<script>

export default {
    name: 'RoomContent',
    data() {
        return {
            blue: 'color: blue',
        }
    },
    props: [ 'posts' ],
    methods: {
      viewDetails(id) {
        const post = this.posts[id];
        this.$router.push({ name: 'Product-Detail', params: { id, post:JSON.stringify(post)} });
      }
    }
}
</script>

<style>
#contents {
  border: .1px solid rgba(0, 0, 0,0.3);
  margin: 10px 0;
  cursor: pointer;
}

.room-img {
  width: 80%;
  margin-top: 20px;
}

</style>