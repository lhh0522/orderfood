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
              <div class="form-group mb-3">
                <label for="confirm-password">确认密码</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="confirmPassword"
                />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">注册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: "LoginPage",
    data() {
      return {
          email: "",
          password: "",
          confirmPassword: "",
      };
    },
    methods: {
      onSubmit() {
        if(this.password === this.confirmPassword) {
            const info = {
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword
            }
            console.log(info)
            axios.post('/users.json',info).then(re=>{
                console.log(re);
            })
        }else{
            alert('两次密码不一致！！');
        }
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