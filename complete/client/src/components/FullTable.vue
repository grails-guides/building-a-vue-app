<!-- Templates can have only one root element --> // <6>
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
	</table>
</template>

<script>
  import TableRow from '../components/TableRow.vue'
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'fulltable',
    template: '#fulltable-template',
    components: {  // <1>
      'tablerow': TableRow
    },
    data: function () { // <2>
      return {
        vehicles: []
      }
    },
    created: function () { // <3>
      this.fetchData()
    },
    updated: function () { // <4>
      // this is required to update view after adding a vehicle, but continuously runs :(
      // this.fetchData()
    },
    methods: { // <5>
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
