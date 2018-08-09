<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="getUserInfo">click me!</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { Button } from 'element-ui';

export default {
  name: 'home',
  components: {
    HelloWorld,
    'el-button': Button,
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo',
    ]),
  },
};
</script>
