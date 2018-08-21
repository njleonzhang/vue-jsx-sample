<script>
export default {
  data () {
    return {
      data: 'I am data in scoped slot'
    }
  },
  render () {
    return (
      <div class='wrapper'>
        {
          this.$scopedSlots.default({
            data: this.data
          })
        }
      </div>
    )
  }
}
</script>
