<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">

        <img src="./assets/logo.png">
        <h1>Welcome to the Garage</h1>
      </div>
    </div>
    <!--<div class="row">-->
        <!--<p> i am only a test </p>-->
    <!--</div>-->
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <fulltable></fulltable>
      </div>
      <div class="col"></div>
    </div>
    <!--<div class="row"></div>-->

     <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import FullTable from './components/FullTable.vue'

  export default {
    name: 'app',
    components: {
      'fulltable': FullTable
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
