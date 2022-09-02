<template>
    <div class="menu">
        <div class="title" @click="gotoMain">
            Vue.js Study
        </div>
        <div class="btn">
            <router-link
                v-for="(menu, i) in navmenu" :key="i"
                :to="{ name: `${menu}`}"
                >{{ menu }}</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            navmenu: ['Home','About','Product'],
        }
    },
    methods: {
        gotoMain() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style>
    .menu {
        background: pink;
        padding: 15px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        color: white;
        font-size: 22px;
        font-weight: 600;
        cursor: pointer;
    }

    .title:hover {
        color: palevioletred;
    }

    .menu a {
        margin-left: 20px;
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
    .menu a:hover {
        background: white;
        color: magenta;
    }
</style>