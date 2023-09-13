<!-- 布局--主体内容 -->
<template>
  <div class="b-layout-content">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.b-layout-content {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>