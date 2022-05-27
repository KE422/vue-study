<template>
    <div class="menu">
        <div class="title">
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
export default {
    name: 'NavBar',
    data() {
        return {
            navmenu: ['Home', 'About', 'Product'],
        }
    },
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