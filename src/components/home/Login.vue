<template>
  <div id="login">
      <h4>로그인</h4>
      <div id="id">
        <span>아이디</span>
        <input class="id"
                type="text"
                placeholder="이메일을 입력해주세요."
                :value="id"
                @change="handleChangeID($event)"
                />
      </div>
      <div id="pw">
          <span>비밀번호</span>
          <input class="pw"
                type="password"
                placeholder="PW를 입력해주세요."
                :value="pw"
                @change="handleChangePW($event)"
                />
      </div>
      <button id="confirm" @click="login()">LOGIN</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginComponent',
    data() {
        return {
            id: '',
            pw: '',
        }
    },
    methods: {
        handleChangeID(e) {
            this.id = e.target.value;
        },
        handleChangePW(e) {
            this.pw = e.target.value;
        },
        login() {
            console.log('id :' , this.id, 'pw : ', this.pw);
            axios
            .post(`https://reqres.in/api/login`, {
                email: this.id,
                password: this.pw
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('lg', this.id);
                this.$router.push({ name: 'Welcome', params: { user: this.id } })
            })
            .catch(err => {
                console.log(err);
                alert(err.message);
            })
        }
    }
}
</script>

<style>    
    input {
        margin-left:10px;
        width: 250px;
        height: 40px;
    }

    #id {
        margin-bottom: 20px;
    }

    button {
        color: black;
        background: darkgray;
        padding: 10px 20px;
        cursor: pointer;
        margin-top: 20px;
        border: none;
    }

    button:hover {
        background: black;
        color: white;
        border: 1px solid black;
    }

</style>