<template>
  <div class="header-wrapper">
    <div class="header">
      <img src="./logo.png" alt="">
      <ul ref="ul">
        <li class="item" @click="setBg(0)"><router-link tag="span" exact to="/index">首页</router-link></li>
        <li class="item" @click="setBg(1)"><router-link tag="span" to="/community">社区</router-link></li>
        <li class="item" @click="setBg(2)"><router-link tag="span" to="/diary">日记</router-link></li>
        <li class="item" @click="setBg(3)"><router-link tag="span" to="/publish">发布</router-link></li>
        <li class="item" @click="setBg(4)"><router-link tag="span" to="/my">我的</router-link></li>
        <li class="bg"></li>
      </ul>
      <div class="user">
        <div class="login">
          <router-link tag="span" to="">登录</router-link>
        </div>
        <div class="register">
          <router-link tag="span" to="">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this._initBg();
  },
  methods: {
    _initBg () {
      let item0 = this.$refs.ul.getElementsByClassName('item')[0];
      let bgElm = this.$refs.ul.getElementsByClassName('bg')[0];
      let _width = item0.offsetWidth;
      let _left = item0.offsetLeft;
      bgElm.style.left = _left + 'px';
      bgElm.style.width = _width + 'px';
    },
    setBg (index) {
      let item0 = this.$refs.ul.getElementsByClassName('item')[index];
      let bgElm = this.$refs.ul.getElementsByClassName('bg')[0];
      let _width = item0.offsetWidth;
      let _left = item0.offsetLeft;
      bgElm.style.left = _left + 'px';
      bgElm.style.width = _width + 'px';
    },
  },
};
</script>

<style scoped lang="less">
.header-wrapper {
  width: 100%;
  height: auto;
  .header {
    width: 1200px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    img {
      float: left;
      height: 100%;
    }
    ul {
      position: relative;
      float: left;
      width: auto;
      height: 100%;
      margin-left: 20px;
      list-style:none;
      span {
        display: block;
        padding: 0 20px;
      }
      span.bg-green {
        color: #fff;
      }
      li.item {
        display: inline-block;
        cursor: pointer;
      }
      li.bg {
        position: absolute;
        height: 100%;
        z-index: -1;
        top: 0;
        background-color: #FF9764;
        color: #fff;
        transition: all .2s;
      }
    }
  }
  .user {
    float: right;
    .login, .register {
      font-size: 14px;
      width: 50px;
      height: 25px;
      line-height: 25px;
      border-radius: 5px;
      background-color: #FF9764;
      float: left;
      text-align: center;
      color: #fff;
      margin-top: 12px;
      cursor: pointer;
    }
    .register {
      margin-left: 20px;
    }
  }
}
</style>
