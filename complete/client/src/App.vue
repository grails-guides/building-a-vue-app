<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">

        <img src="./assets/logo.png">
        <h1>Welcome to the Garage</h1>
      </div>
    </div>
    <div id="headerRow" class="row">
      <div class="col">
        <h3>Add a Vehicle:</h3>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div id="inputRow" class="row">
      <div class="col"></div>
      <div class="col-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter a name...">
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col"><make-select></make-select></div>
          <div class="col"><model-select></model-select></div>
          <div class="col"><driver-select></driver-select></div>
        </div>
      </div>
      <div class="col-2">
        <div class="btn-group" role="group" aria-label="Add new vehicle">
          <button type="button" class="btn btn-success">Add to Garage</button>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div id="tableRow" class="row">
      <div class="col"></div>
      <div class="col-8">
        <fulltable></fulltable>
      </div>
      <div class="col"></div>
    </div>

     <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import FullTable from './components/FullTable.vue'
  import MakeSelect from './components/MakeSelect.vue'
  import ModelSelect from './components/ModelSelect'
  import DriverSelect from './components/DriverSelect'

  export default {
    name: 'app',
    components: {
      'fulltable': FullTable,
      MakeSelect,
      ModelSelect,
      DriverSelect
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
  #tableRow {
    margin-top: 15px;
  }
</style>
