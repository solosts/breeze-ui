<!-- 布局--头部 -->
<template>
  <div class="b-layout-header" :style="`height: ${height};`">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>

const props = defineProps({
  // 高度
  height: {
    type: String,
    default: '60px'
  }
})
</script>
<style lang='scss' scoped>
.b-layout-header {
  flex: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>