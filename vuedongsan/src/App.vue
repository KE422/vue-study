<template>
  <!-- modal -->
  <div v-for="(product, i) in products" :key="i">
    <div class="black-bg" v-if="is_open[i] == true">
      <div class="white-bg">
        <h4>{{ products[i] }} 상세페이지</h4>
        <p>상세 내용</p>
        <button class="close" @click="showModal(i)">닫기</button>
      </div>
    </div>
  </div>

  <!-- nav bar -->
  <div class="menu">
    <a v-for="(menu, i) in navmenu" :key="i">{{ menu }}</a>
  </div>

  <!-- contents -->
  <div v-for="(product, i) in products" :key="i" @click="showModal(i)" style="cursor: pointer">
    <img alt="원룸이미지" :src="require(`@/assets/images/room${i}.jpg`)" class="room-img" />
    <h4 class="red" :style="style1">{{ products[i] }}</h4>
    <h4>{{ prices[i] }} 만원</h4>
    <button @click="increase(i)">허위매물신고</button>
    <span> 신고 수:{{count[i]}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  // 데이터 보관함 (state)
  data() {
    return {
      // 데이터 입력 (state)
      style1: 'color: blue',
      navmenu: ['Home', 'Products', 'About'],
      products: ['역삼동원룸', '천호동원룸', '도곡동원룸'],
      prices: [50, 60, 80],
      count: [0, 0, 0],
      is_open: [false, false, false],
    }
  },
  components: {
  },
  methods: {
    // 함수 입력
    increase(i) {
      this.count[i]++;
    },
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

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 80%;
  margin-top: 20px;
}

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
