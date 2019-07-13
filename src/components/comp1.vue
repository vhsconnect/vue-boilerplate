<template>
<div>
  <div v-if="condition">
    <span>Hi from Comp1, I'm {{firstName}}</span>
    <span>Here is my email: {{contactme}}</span>
  </div>
  <div v-else>
    <span>Hi from Comp1, I'm {{otherName}}.</span>
    <span>Here is my email: {{contactme}}</span>
  </div>
  <Comp2
  :othername="otherName"
  />
</div>
</template>

<script>
import Comp2 from './Comp2.vue'

export default {
  components: {
    Comp2
  },
  data() {
    return {
      firstName: "das bus",
      otherName: "cellphone",
      condition: false
    };
  },
  props: ["contactme", "groceries"]
};
</script>


