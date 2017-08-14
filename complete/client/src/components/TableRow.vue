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


// https://github.com/vuejs/vue/issues/3039
// https://codepen.io/khamer/pen/ZQbQXp
