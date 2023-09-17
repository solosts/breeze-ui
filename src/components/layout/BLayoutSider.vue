<!-- 布局--侧边栏 -->
<template>
  <div class="b-layout-sider" :style="`width:${width}`">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
defineProps({
  // 侧边栏宽度
  width: {
    type: String,
    default: '300px'
  }
})
</script>
<style lang='scss' scoped>
.b-layout-sider {
  flex: none;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>