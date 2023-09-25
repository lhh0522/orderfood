<template>
  <div id="app">
    <HeaderNav />
    <div>
      <router-view></router-view>
    </div>
    <div class="row  justify-content-between mt-2">
        <router-view name="historicalOrders"></router-view>
        <router-view name="orderingGuide"></router-view>
        <router-view name="deliveryPage"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
#app {
  width: 75%;
  margin: 0 auto;
}
</style>
