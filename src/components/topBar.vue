<template>
  <div class="top-bar">
    <header class="header">
      <div class="header-btn is-left" v-show="isLeft">
        <i class="fa fa-chevron-left"></i>
        <button @click="$router.go(-1)">返回</button>
      </div>
      <h3 class="header-title">{{ title }}</h3>
      <div class="header-btn is-right" v-show="btn_icon">
        <button @click="$emit('rightClick')">
          <i :class="'fa fa-' + btn_icon"></i>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "headers",
  props: {
    title: String,
    isLeft: {
      type: Boolean,
      default: false
    },
    btn_icon: String
  }
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 2.5rem;
  background-color: #333;
  position: relative;
  color: #fff;
}
.is-left {
  height: 100%;
  position: absolute;
  left: 3%;
}
.is-right {
  position: absolute;
  right: 3%;
  top: 23%;
}
.is-right button{
    background-color: transparent;
    border: none;
    outline: none;
    color: #FFF;
}
.header-title {
  text-align: center;
  line-height: 2.5rem;
  font-size: 1rem;
}
</style>
