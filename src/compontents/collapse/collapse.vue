<template>
    <div class="collapse">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'collapse',
  methods: {
    cut (childId) {
      this.$children.forEach(child => {
        if (child._uid !== childId) {
          child.show = false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
p{
  text-align:left;
}
</style>
