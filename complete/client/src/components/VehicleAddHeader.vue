<!-- Templates can have only one root element -->
<template id="add-vehicle-header-template">
  <div id="headerRow" class="row">
    <div class="col">
      <h3>Add a Vehicle:</h3>
    </div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</template>

<script>
  export default {
    name: 'vehicleaddheader',
    template: '#add-vehicle-header-template'
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
