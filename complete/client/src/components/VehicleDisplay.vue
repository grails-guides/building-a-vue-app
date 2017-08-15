<!-- Templates can have only one root element -->
<template id="display-vehicle-template">
  <div id="tableRow" class="row">
    <div class="col"></div>
    <div class="col-8">
      <fulltable></fulltable>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
  import FullTable from '../components/FullTable'

  export default {
    name: 'vehicledisplay',
    template: '#display-vehicle-template',
    components: {
      'fulltable': FullTable  // Dont understand why this one has to be written this way or the table doesnt show up
    }
  }
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  /* Add custom rules here */
</style>
