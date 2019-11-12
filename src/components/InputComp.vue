<template>
  <div>
    <input type="text" class="input" :value="value" v-on="keypress" />
    <MamoComponent :aLittleText="vhsText" />
  </div>
</template>

<script>
import MamoComponent from "./MamoComponent.vue";
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      vhsText: "vhs ws here"
    };
  },
  computed: {
    keypress() {
      return {
        ...this.$listeners,
        input: e => this.$emit("input", e.target.value)
      };
    }
  },
  components: {
    MamoComponent
  }
};
</script>

