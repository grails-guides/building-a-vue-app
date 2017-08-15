<!-- Templates can have only one root element -->
<template id="makeSelect-template" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="form-group">
    <select class="form-control" v-model="selected" @change="updateValue()">
      <option disabled value="">Select a Make</option>
      <option v-for="make in makes" v-bind:value="make">
        {{ make.name }}
      </option>
    </select>
  </div>
</template>

<script>
  import { SERVER_URL } from '../config/config'

  export default {
    name: 'makeSelect',
    template: '#makeSelect-template',
    props: ['value'],
    data: function () {
      return {
        makes: [],
        selected: this.value
      }
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        fetch(`${SERVER_URL}/make`)
          .then(r => r.json())
          .then(json => this.setData(json))
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      setData: function (data) {
        this.makes = data
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
