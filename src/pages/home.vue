<template>
  <div class="test">
    全选<input type="checkbox" v-model="checkAll"/><hr><input type="checkbox" v-for="(item, index) of checkList" :key='index' v-model="item.value">
    <br>
    用户名字：<p>{{fullName}}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      checkList: [{
        value: true
      }, {
        value: false
      }, {
        value: false
      }],
      firstName: '小',
      lastName: '明'
    }
  },
  computed: {
    // 是同步的
    checkAll: {
      get () {
        return this.checkList.every(check => check.value)
      },
      set (value) {
        this.checkList.forEach((check) => {
          check.value = value
        })
      }
    },
    fullName () {
      return this.firstName + this.lastName
    }
  },
  watch: {
    // 实现一些简单的功能
    // fullName(){
    //     return this.firstName + this.lastName
    // }

  },
  methods: {
    // getFullName () {
    //     return this.firstName + this.lastName
    // }
  },
  mounted () {
    // this.getFullName()
  }
}
</script>

<style scoped>
</style>
