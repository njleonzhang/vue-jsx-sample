<template>
  <input v-model="innerData"/>
</template>

<script>
export default {
  props: {
    data: ''
  },
  computed: {
    innerData: {
      get () {
        return this.data
      },
      set (val) {
        this.$emit('update:data', val)
      }
    }
  }
}
</script>
