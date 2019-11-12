<script>
// <template>
//   <div>
//     <input type="text" class="input" :value="value" v-on="keypress" />
//     <MamoComponent :aLittleText="vhsText" />
//   </div>
// </template>
</script>

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
    keypress: function(e) {
      return {
        ...this.$listeners,
        input: e => this.$emit("input", e.target.value)
      };
    }
  },
  components: {
    MamoComponent
  },
  render: function(h) {
    return (
      <div>
        <input
          value={this.value}
          type="text"
          class="input"
          onInput={this.keypress}
        />
        <MamoComponent aLittleText={this.vhsText} />
      </div>
    );
  }
};

//in here we can see us passing variables to our template from both props and data !
</script>

