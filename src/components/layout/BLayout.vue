<!-- 布局容器 -->
<template>
  <div class="b-layout" :style="`flex-direction:${mode == 'horizontal' ? 'row' : 'column'}`">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
defineProps({
  // 布局排列方式   vertical：垂直排列  horizontal：水平排列
  mode: {
    type: String,
    default: 'vertical'
  }
})
</script>
<style lang='scss' scoped>
.b-layout {
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>