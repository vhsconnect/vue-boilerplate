<template>
  <div id='some'>
    <div v-if="1 + 2 == 3">
      <p>I'm Comp one => {{name}}</p>
      <Comp2 />
    </div>
  </div>
</template>

<script>
import Comp2 from './comp2.vue'
 
 export default {
    components: {
      Comp2
    },
    el: '#some',
    data: {
        name: 'das bus'
    }
  }

</script>

