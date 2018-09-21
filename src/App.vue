<template>
  <div id="app">
    <m-header></m-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header.vue';

export default {
  components: {
    MHeader,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0
}
section {
  width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 0;
}
</style>
