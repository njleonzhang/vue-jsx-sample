<template>
  <input v-model="innerValue"/>
</template>

<script>
export default {
  props: {
    value: ''
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
