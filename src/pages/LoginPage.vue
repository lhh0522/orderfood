<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/logo.png" alt="logo" />
          <form @submit.prevent="onSubmit">
            <div class="form-group mb-3">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group mb-3">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="submit">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      info: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios.get("/users.json").then((res) => {
        const users = [];
        for (let key in res.data) {
          users.push(res.data[key]);
        }
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password;
        });
        if (result != null && result > 0){
            this.$router.push('/Home')
        }
      });
    },
  },
};
</script>

<style>
img {
  margin: 0 auto;
  display: block;
}
</style>