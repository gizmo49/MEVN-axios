<template>
  <div id="app">
    <posts></posts>
    <newpost></newpost>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
import Newpost from './components/Newpost.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Posts,
    Newpost
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
