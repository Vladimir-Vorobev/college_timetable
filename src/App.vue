<template>
 <div id="app" style="height: 100% !important;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
    width:100% !important; 
    height:100% !important; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
  padding: 0px;
  margin: 0px;
  background-color: rgb(231, 231, 231);
}
body {
  margin: 0px;
}
</style>