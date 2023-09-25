<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">联系我们</h5>
      <h6 class="card-subtitle mb-2 text-muted">contact us</h6>
      <p class="card-text">
        如果你有合适的建议或者遇到了问题，可以通过以下方式联系我们。
      </p>
      <router-link :to="{name:'tel'}" class="card-link">电话</router-link>
      <router-link :to="{name:'vx'}" class="card-link">微信</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style>
</style>