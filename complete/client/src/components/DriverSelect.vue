<template id="driverSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected">
      <option disabled value="">Select a Driver</option>
      <option v-for="driver in drivers" v-bind:value="driver.name">
        {{ driver.name }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'driverSelect',
    template: '#driverSelect-template',
    data: function () {
      return {
        drivers: [],
        selected: ''
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch('http://localhost:8080/driver')
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving drivers: ' + error))
      },
      setData: function (data) {
        this.drivers = data
        console.log(this.drivers)
      }
    }
  }
</script>
