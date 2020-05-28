<template>
 <div id="app" style="height: 100% !important;">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: { Header },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100% !important;
  padding: 0px;
  margin: 0px;
}
body, html{
    height: 100vh;
    width: 100%;
    margin: 0px;
}

.main{
    margin-top: 100px;
    height: 100%;
}
</style>