<template>
    <div>
      <title>手风琴-折叠菜单</title>
      <collapse>
        <collapse-item title="菜单1">
          <p>
            内容一
          </p>
        </collapse-item>
        <collapse-item title="菜单2">
          <p>
            内容二
          </p>
        </collapse-item>
      </collapse>
    </div>
</template>

<script>
import collapse from '@/compontents/collapse/collapse'
import collapseItem from '@/compontents/collapse/collapse-item'
export default {
  name: 'home',
  components: {
    collapse,
    collapseItem
  }
}
</script>

<style scoped lang="less">
  p{
    font-size:12px;
    color:#999;
  }

</style>
