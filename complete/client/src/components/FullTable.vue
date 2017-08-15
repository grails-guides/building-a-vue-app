<!-- Templates can have only one root element -->
<template id="fulltable-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<table class="table">
    <thead class="thead-inverse">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Make</th>
        <th>Model</th>
        <th>Driver</th>
      </tr>
    </thead>
      <!-- To pass an object v-bind is required -->
      <tablerow v-bind:row-data="vehicles"></tablerow>

    <!-- The following works as well without a template -->
    <!--<tbody>-->
      <!--<tr v-for="vehicle in vehicles">-->
          <!--<td>{{ vehicle.id }}</td>-->
          <!--<td>{{ vehicle.name }}</td>-->
          <!--<td>{{ vehicle.make.name }}</td>-->
          <!--<td>{{ vehicle.model.name }}</td>-->
          <!--<td>{{ vehicle.driver.name }}</td>-->
      <!--</tr>-->
    <!--</tbody>-->
	</table>
</template>

<script>
  import TableRow from '../components/TableRow.vue'
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'fulltable',
    template: '#fulltable-template',
    components: {
      'tablerow': TableRow
    },
    data: function () {
      return {
        vehicles: []
      }
    },
    created: function () {
      this.fetchData()
    },
    updated: function () { // this is required to update view after adding a vehicle
      // this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch(`${SERVER_URL}/vehicle`)
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      setData: function (data) {
        this.vehicles = data
      }
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
