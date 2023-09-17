<!-- svg图标 -->
<template>
  <svg aria-hidden="true" :style="`width:${size}px;height:${size}px;font-size:${size}px;color:${color}`">
    <use :href="`#${name}`" rel="external nofollow" />
  </svg>
</template>
<script setup lang='ts'>
defineProps({
  // 图标名称  svg图标名称   svg-文件名
  name: {
    type: String,
    default: 'svg-logo'
  },
  // 图标大小
  size: {
    type: Number,
    default: 16
  },
  // 图标颜色
  color: {
    type: String,
    default: ''
  },
})
</script>
<style lang='scss' scoped>
svg {
  fill: currentColor;
}
</style>