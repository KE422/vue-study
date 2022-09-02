<template>
  <div id="welcome">
      Hello, {{ user?.split('@')[0] }}<br />
      <button class="logout" @click="logout()">LOGOUT</button>
  </div>
</template>

<script>
export default {
    name: 'WelcomePage',
    data() {
        return {
            user: localStorage.getItem('lg'),
        }
    },
    // computed: {
    //     user() {
    //         // {
    //         //     "email": "eve.holt@reqres.in",
    //         //     "password": "cityslicka"
    //         // }
    //         return this.$route.params?.user?.split('@')[0];
    //     }
    // },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Home' });
        }
    },
}
</script>

<style>
 #welcome {
     font-size: 22px;
     font-weight: 700;
 }
.logout {
     border:.1px solid palevioletred;
     padding:10px 20px;
     background: white;
     color: palevioletred;
     cursor: pointer;
     margin-top: 15px;
 }
 .logout:hover{
     background: palevioletred;
     color: white;
 }
</style>