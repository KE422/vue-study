<template>
  <div id="home">
      <Login />
  </div>
</template>

<script>
import Login from '@/components/home/Login.vue'

export default {
  name: 'HomePage',
  components: {
    Login,
  },
}
</script>

<style>
#home {
  padding: 20px 0;
}
</style>