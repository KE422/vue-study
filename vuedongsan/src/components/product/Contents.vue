<template>
    <div id="contents" v-for="post in posts" :key="post.id">
      <img alt="원룸이미지" :src="posts[post.id].image" class="room-img" />
      <h4 class="blue" :style="blue">{{ posts[post.id].title }}</h4>
      <h4>{{ posts[post.id].price.toLocaleString('ko-KR') }} 원</h4>
    </div>
</template>

<script>
import posts from '@/assets/data.js'

export default {
    name: 'RoomContent',
    data() {
        return {
            blue: 'color: blue',
            posts: posts,
        }
    }
}
</script>

<style>

.room-img {
  width: 80%;
  margin-top: 20px;
}

</style>