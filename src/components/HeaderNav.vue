<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">点餐系统</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" aria-current="page" to="/Home">主页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/Menu">菜单</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/Manage">管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/AboutUs">关于我们</router-link>
            </li>
          </ul>
        </div>
        <ul class="nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/Login">登录</router-link>
          </li>
          <span class="navbar-text ">|</span>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/Rigster">注册</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
    .active {
        background-color: rgb(231, 230, 230);
    }
</style>