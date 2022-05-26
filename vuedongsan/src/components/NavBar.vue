<template>
  <div class="menu">
    <a v-for="(menu, i) in navmenu" :key="i">{{ menu }}</a>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navmenu: ['Home', 'About', 'Product'],
        }
    }
}
</script>

<style>
    .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 10px;
    }

    .menu a {
    color: white;
    padding: 10px;
    }
</style>