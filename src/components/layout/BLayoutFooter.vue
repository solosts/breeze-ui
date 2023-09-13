<!-- 布局--底部 -->
<template>
  <div class="b-layout-footer" :style="`height: ${height};`">
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
.b-layout-footer {
  flex: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>