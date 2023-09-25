<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="bg">
            <h1>欢迎大家点餐！</h1>
            <h2>宵夜来一波~~</h2>
            <button type="button" class="btn btn-success">开始订阅</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'HomePage'
}
</script>

<style>
    #home {
        background: url(../assets/bg.jfif);
        height: 85vh;
        padding: 10%;
    }
    h1,h2 {
        margin: 6%;
    }
    .bg {
        background-color: aliceblue;
        opacity: 0.8;
        padding: 6% 0;
    }
</style>