<template id="makeSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected">
      <option disabled value="">Select a Make</option>
      <option v-for="make in makes" v-bind:value="make.name">
        {{ make.name }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'makeSelect',
    template: '#makeSelect-template',
    data: function () {
      return {
        makes: [],
        selected: ''
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch('http://localhost:8080/make')
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      setData: function (data) {
        this.makes = data
        console.log(this.makes)
      }
    }
  }
</script>
