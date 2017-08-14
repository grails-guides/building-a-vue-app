<template id="tablerow-template">
  <tr>
    <td><input type="text" v-model="a" /></td>
    <td><input type="text" v-model="b" /></td>
    <td><input type="text" v-model="c"/></td>
  </tr>
</template>

<script>
//  import Vue from 'vue'
//
//  Vue.extend({
//    template: '#tablerow-template',
//    data: function () {
//      return {
//        a: 3,
//        b: 4
//      }
//    },
//    computed: {
//      c: function () {
//        return this.a * this.b
//      }
//    }
//  })

//  Vue.component('tablerow', {
//    template: '#tablerow-template',
//    data: function () {
//      return {
//        a: 3,
//        b: 4
//      }
//    },
//    computed: {
//      c: function () {
//        return this.a * this.b
//      }
//    }
//  })

  export default {
    name: 'tablerow'
  }
</script>
