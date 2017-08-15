<template>
  <div id="app">
    <app-header></app-header>
    <vehicle-add-header></vehicle-add-header>
    <vehicle-add></vehicle-add>
    <vehicle-display></vehicle-display>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import VehicleAddHeader from './components/VehicleAddHeader'
  import VehicleAdd from './components/VehicleAdd'
  import VehicleDisplay from './components/VehicleDisplay'

  export default {
    name: 'app',
    components: {
      AppHeader,
      VehicleAddHeader,
      VehicleAdd,
      VehicleDisplay
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
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
