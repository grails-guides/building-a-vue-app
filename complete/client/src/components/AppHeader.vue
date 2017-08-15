<!-- Templates can have only one root element -->
<template id="app-header-template">
  <div class="container">
    <div class="jumbotron">
      <img src="../assets/logo.png">
      <h1>Welcome to the Garage</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appheader',
    template: '#app-header-template'
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
