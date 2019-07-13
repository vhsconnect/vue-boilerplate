<template>
  <input
  type="text"
  class="input"
  :value="value" 
  v-on="keypress"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    keypress(){
      return {
        ...this.$listeners,
        input: e =>  this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

