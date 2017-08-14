<template id="modelSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected">
      <option disabled value="">Select a Model</option>
      <option v-for="model in models" v-bind:value="model.name">
        {{ model.name }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'modelSelect',
    template: '#modelSelect-template',
    data: function () {
      return {
        models: [],
        selected: ''
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch('http://localhost:8080/model')
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving models: ' + error))
      },
      setData: function (data) {
        this.models = data
        console.log(this.models)
      }
    }
  }
</script>
