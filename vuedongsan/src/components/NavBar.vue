<template>
    <div class="menu">
        <div class="title" @click="gotoMain">
            Real-Estate
        </div>
        <div class="btn">
            <router-link
                v-for="(menu, i) in navmenu" :key="i"
                :to="{ path: menu.toLocaleLowerCase() }"
                >{{ menu }}</router-link>
        </div>
    </div>
</template>

<script>
// import router from 'vue-router'

export default {
    name: 'NavBar',
    data() {
        return {
            navmenu: ['Home', 'About', 'Product'],
        }
    },
    methods: {
        gotoMain() {
            this.$router.push({path: '/'});
        }
    }
}
</script>

<style>
    .menu {
        background: darkslateblue;
        padding: 15px 20px;
        border-radius: 10px;
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
        text-decoration: underline;
    }

    .menu a {
        margin-left: 20px;
        color: white;
        cursor: pointer;
    }
    .menu a:hover {
        text-decoration: underline;
    }
</style>