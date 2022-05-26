<template>
  <div v-for="(post, i) in posts" :key="i">
      <!-- ! 이게 왜 되지?.. -->
      <!-- <div class="black-bg" v-if="is_open[i] == true">
        <div class="white-bg">
          <h4>{{ posts[i].title }}</h4>
          <p>{{ posts[i].content }}</p>
          <button class="close" @click="showModal(i)">닫기</button>
        </div>
      </div> -->
    </div>
</template>

<script>
import posts from '@/assets/data.js'

export default {
    name: 'DetailModal',
    data() {
        return {
            posts: posts,
        }
    }
}
</script>

<style>

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.close {
  cursor: pointer;
}
</style>