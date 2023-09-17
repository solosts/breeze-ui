<!-- 首页 -->
<template>
  <div>
    <div class="text-c mar-t-20">
      <svg-icons name="svg-logo" color="var(--color-primary)" :size="260"></svg-icons>
    </div>
    <h1 class="title">Breeze UI</h1>
    <p class="des">一个PC端Vue3组件库，使用TypeScript.</p>
    <div class="btn-box">
      <span>换个主题</span>
      <span>开始使用</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped>
.title {
  text-align: center;
  font-size: 34px;
}

.des {
  text-align: center;
  font-size: 18px;
  color: var(--color-text-regular);
  margin-top: 14px;
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  span {
    font-size: 16px;
    padding: 4px 12px;
    border: 1px solid var(--border-color-base);
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>