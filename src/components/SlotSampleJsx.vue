<script>
export default {
  render () {
    return (
      <div class='wrapper'>
        <span>I am a component</span>
        {
          this.$slots.default
        }
        {
          this.$slots.namedSlot
        }
      </div>
    )
  },
  mounted () {
    window.vm = this
  }
}
</script>
