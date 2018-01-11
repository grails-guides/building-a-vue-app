<template>
  <div id="app">
    <app-header></app-header>
    <vehicle-form v-model="vehicle" :makes="makes" :models="models" :drivers="drivers" @submit="submitNewVehicle()"></vehicle-form>
    <vehicle-table :vehicles="vehicles"></vehicle-table>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader' // <1>
  import VehicleForm from './components/form/VehicleForm'
  import VehicleTable from './components/table/VehicleTable'

  export default {
    name: 'app',
    components: { // <2>
      AppHeader,
      VehicleForm,
      VehicleTable
    },
    data: function () { // <2>
      return {
        vehicles: [],
        vehicle: {name: '', make: null, model: null, driver: null},
        models: [],
        makes: [],
        drivers: [],
        serverURL: process.env.SERVER_URL
      }
    },
    created () { // <3>
      this.fetchVehicles()
      this.fetchModels()
      this.fetchMakes()
      this.fetchDrivers()
    },
    methods: {
      fetchVehicles: function () {
        fetch(`${this.serverURL}/vehicle`)
          .then(r => r.json())
          .then(json => { this.vehicles = json })
          .catch(error => console.error('Error retrieving vehicles: ' + error))
      },
      fetchModels: function () {
        fetch(`${this.serverURL}/model`)
          .then(r => r.json())
          .then(json => { this.models = json })
          .catch(error => console.error('Error retrieving models: ' + error))
      },
      fetchMakes: function () {
        fetch(`${this.serverURL}/make`)
          .then(r => r.json())
          .then(json => { this.makes = json })
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      fetchDrivers: function () {
        fetch(`${this.serverURL}/driver`)
          .then(r => r.json())
          .then(json => { this.drivers = json })
          .catch(error => console.error('Error retrieving drivers: ' + error))
      },
      submitNewVehicle: function () {
        let vehicle = this.vehicle // <4>

        console.log(vehicle)
        fetch(`${this.serverURL}/vehicle`, { // <5>
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(vehicle)
        }).then(r => r.json()) // <6>
          .then(json => { this.vehicles.push(json) })
          .catch(ex => console.error('Unable to save vehicle', ex))
      }
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
  }
</style>
