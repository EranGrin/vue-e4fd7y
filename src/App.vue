<template>
  <div id="app">
    <div
      style="
        border: 3px;
        border-color: blueviolet;
        border-style: solid;
        padding: 1rem;
      "
    >
      Header
    </div>
    <TruncateTest />
    <div
      style="
        border: 3px;
        border-color: blueviolet;
        border-style: solid;
        padding: 1rem;
        margin-top: 1rem;
      "
    >
      Footer
    </div>
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TruncateTest from './components/TruncateTest.vue';

export default {
  name: 'App',
  components: {TruncateTest},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
