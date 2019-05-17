<template>
    <div class="collapse-item" @click="toggle()">
      <p>{{title}}</p>
      <div v-show="show">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'collapse-item',
  props: {
    title: {
      type: String,
      default: ''
    },
    arr: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
      this.$parent.cut(this._uid)
    }
  }
}
</script>

<style scoped lang="less">
  .collapse-item{
    p{
      text-align:left;
      line-height:35px;
      color:#666;
    }
  }
</style>
