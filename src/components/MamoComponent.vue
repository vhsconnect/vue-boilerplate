<script>
export default {
  props: ['aLittleText'],
  render: function(h){
    return (
      <div>
      <h1>{this.aLittleText}</h1>
      </div>
    )
  }
}
</script>