<template>
  <div id="app">
    <p id="something">I'm app.vue =>{{name}}</p>
    <Comp1/>
    <comp3 v-bind:examples="name"></comp3>
  </div>
</template>

<script>
  import Comp1 from "./components/comp1.vue"
  import Comp3 from "./components/comp3.vue"

  export default {
    components: {
      Comp1,
      Comp3
    },
    data: {
      name: 'jimmy p'
    }

  }
</script>
