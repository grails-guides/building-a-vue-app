<!-- Templates can have only one root element -->
<template id="modelSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected" @change="updateValue()">
      <option disabled value="">Select a Model</option>
      <option v-for="model in models" v-bind:value="model">
        {{ model.name }}
      </option>
    </select>
  </div>
</template>

<script>
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'modelSelect',
    template: '#modelSelect-template',
    props: ['value'],
    data: function () {
      return {
        models: [],
        selected: this.value
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch(`${SERVER_URL}/model`)
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving models: ' + error))
      },
      setData: function (data) {
        this.models = data
      },
      updateValue: function () {
        this.$emit('input', this.selected)
      }
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
