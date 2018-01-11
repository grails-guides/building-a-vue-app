<template id="add-vehicle-template" xmlns="http://www.w3.org/1999/xhtml">
  <div>
    <vehicle-form-header/>

    <div id="inputRow" class="row">
      <div class="col-sm-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter a name..." v-model="vehicle.name">
        </div>
      </div>
      <div class="col-sm-7">
        <div class="row">
          <div class="col-sm-4">
            <field-select v-model="vehicle.make" :field="'Make'" :values="makes"></field-select>
          </div>
          <div class="col-sm-4">
            <field-select v-model="vehicle.model" :field="'Model'" :values="models"></field-select>
          </div>
          <div class="col-sm-4">
            <field-select v-model="vehicle.driver" :field="'Driver'" :values="drivers"></field-select>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="btn-group" role="group" aria-label="Add new vehicle">
          <button type="button" class="btn btn-success" @click="submit()">Add to Garage</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import VehicleFormHeader from './VehicleFormHeader'
  import FieldSelect from './FieldSelect'

  export default {
    props: ['vehicle', 'makes', 'models', 'drivers', 'submitNewVehicle'],
    model: {
      prop: 'vehicle',
      event: 'change'
    },
    components: { // <2>
      VehicleFormHeader,
      FieldSelect
    },
    methods: {
      submit () {
        this.$emit('submit')
      }
    }
  }
</script>

<style>
  /* Add custom rules here */
</style>
