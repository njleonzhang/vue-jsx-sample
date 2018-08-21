<template>
  <div class='wrapper'>
    <span>I am a component</span>
    <slot></slot>
    <slot name='namedSlot'></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 'I am data in slot'
    }
  }
}
</script>
