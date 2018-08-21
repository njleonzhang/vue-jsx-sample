<template>
  <div class='wrapper'>
    <slot :data='data'></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 'I am data in scoped slot'
    }
  }
}
</script>
