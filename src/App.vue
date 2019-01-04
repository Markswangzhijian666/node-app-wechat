<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name :'APP',
  created() {
    if(localStorage.wxpyToken){
      const decode = jwt_decode(localStorage.wxpyToken);
      this.$store.dispatch("setUser",decode);
    }
  },
}
</script>
<style>
html,body,#app{
  width: 100%;
  height: 100%;
  font-size: 20px;
}
</style>
