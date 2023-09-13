<!-- svg图标 -->
<template>
  <svg aria-hidden="true" :style="`width:${size}px;height:${size}px;font-size:${size}px;color:${color}`">
    <use :href="`#${name}`" rel="external nofollow" />
  </svg>
</template>
<script setup lang='ts'>
const props = defineProps({
  name: {
    type: String,
    default: 'logo'
  },
  size: {
    type: Number,
    default: 16
  },
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