<template>
  <div id="home">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      isLogined: localStorage.getItem('lg') === null ? false : true,
    }
  },
  created() {
    console.log('is logined?', this.isLogined);
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (this.isLogined) {
        this.$router.push({ name: 'Welcome' });
      }
      else {
        this.$router.push({ name: 'Login' });
      }
    }
  },
  updated() {
    this.checkAuth();
    this.$router.go();
  },
}
</script>

<style>
#home {
  padding: 20px 0;
}
</style>