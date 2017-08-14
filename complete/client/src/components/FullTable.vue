<template id="fulltable-template">
	<table>
		<tablerow></tablerow>
		<!--<tablerow></tablerow>-->
		<tr>
			<td>Total: {{ total }}</td>
		</tr>
	</table>
</template>

<script>
  import Vue from 'vue'
//  import TableRow from '../components/TableRow.vue'
//
  let TableRow = Vue.extend({
    template: '<tr><td><input type="text" v-model="a" /></td><td><input type="text" v-model="b" /></td><td><input type="text" v-model="c"/></td></tr>',
    data: function () {
      return {
        a: 3,
        b: 4
      }
    },
    computed: {
      c: function () {
        return this.a * this.b
      }
    }
  })

  Vue.component('fulltable', {
    template: '#fulltable-template',
    computed: {
      total: function () {
        let total = 0
        for (let i = 0; i < this.$children.length; i++) {
          total += this.$children[i].c
        }

        return total
      }
    }
  })

  export default {
    name: 'fulltable',
    components: {
      'tablerow': TableRow
    }
  }
</script>
