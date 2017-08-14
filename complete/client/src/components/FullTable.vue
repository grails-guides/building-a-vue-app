<template id="fulltable-template">
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
    methods: {
      fetchData: function () {
        fetch('http://localhost:8080/vehicle')
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      setData: function (data) {
        this.vehicles = data
        console.log(this.vehicles)
      }
    }
  }
</script>
