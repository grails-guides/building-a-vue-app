<!-- Templates can have only one root element -->
<template id="add-vehicle-template" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="inputRow" class="row">
    <div class="col"></div>
    <div class="col-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Enter a name..." v-model="name">
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col"><make-select v-model="make"></make-select></div>
        <div class="col"><model-select v-model="model"></model-select></div>
        <div class="col"><driver-select v-model="driver"></driver-select></div>
      </div>
    </div>
    <div class="col-2">
      <div class="btn-group" role="group" aria-label="Add new vehicle">
        <button type="button" class="btn btn-success" v-on:click="submitNewVehicle()">Add to Garage</button>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
  import MakeSelect from '../components/MakeSelect'
  import ModelSelect from '../components/ModelSelect'
  import DriverSelect from '../components/DriverSelect'
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'vehicleadd',
    template: '#add-vehicle-template',
    components: {
      MakeSelect,
      ModelSelect,
      DriverSelect
    },
    data: function () {
      return {
        make: '',
        model: '',
        driver: '',
        name: ''
      }
    },
    methods: {
      submitNewVehicle: function () {
        console.log('submitNewVehicle...')
        let vehicle = {name: this.name, make: this.make, model: this.model, driver: this.driver}
        fetch(`${SERVER_URL}/vehicle`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(vehicle)
        }).then(r => r.json())
          .then(json => console.log(json) // {
//            let vehicles = this.state.vehicles
//            vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver})
//            this.setState({vehicles})
//          }
          ).catch(ex => console.error('Unable to save vehicle', ex))
      }
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
