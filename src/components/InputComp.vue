<script>
import MamoComponent from "./MamoComponent.vue";
export default {
  props: {
    itemInput: {
      type: String,
      default: ""
    },
    updateInput: {
      type: Function
    },
    addItem: {
      type: Function
    }
  },
  components: {
    MamoComponent
  },
  render: function(h) {
    return (
      <div>
        <input
          value={this.itemInput}
          type="text"
          class="input"
          onInput={e => this.updateInput(e.target.value)}
          onChange={e => {this.addItem(); } }
        />
        <MamoComponent aLittleText={this.vhsText} />
      </div>
    );
  }
};

//in here we can see us passing variables to our template from both props and data !
</script>

