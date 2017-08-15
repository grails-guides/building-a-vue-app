<!-- Templates can have only one root element -->
<template id="driverSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected" @change="updateValue()">
      <option disabled value="">Select a Driver</option>
      <option v-for="driver in drivers" v-bind:value="driver">
        {{ driver.name }}
      </option>
    </select>
  </div>
</template>

<script>
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'driverSelect',
    template: '#driverSelect-template',
    props: ['value'],
    data: function () {
      return {
        drivers: [],
        selected: this.value
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch(`${SERVER_URL}/driver`)
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving drivers: ' + error))
      },
      setData: function (data) {
        this.drivers = data
      },
      updateValue: function () {
        this.$emit('input', this.selected)
      }
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
