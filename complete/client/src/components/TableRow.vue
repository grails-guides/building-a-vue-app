<!-- Templates can have only one root element --> // <1>
<template id="tablerow-template">
  <tbody>
    <tr v-for="item in rowData">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.make.name }}</td>
      <td>{{ item.model.name }}</td>
      <td>{{ item.driver.name }}</td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'tablerow',
    props: ['rowData'],
    template: '#tablerow-template'
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
