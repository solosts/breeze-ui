<!-- 主题配置 -->
<template>
  <div :class="`theme-${theme || 'light'}`">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>

defineProps<{ theme: 'light' | 'dark' }>()

</script>
<style lang='scss' scoped>
.theme-light {
  /* 基础 */
  --color-primary: #409EFF;
  --color-success: #67C23A;
  --color-warning: #E6A23C;
  --color-danger: #F56C6C;
  --color-info: #909399;

  /* 文字 */
  --color-text-primary: #303133;
  --color-text-regular: #606266;
  --color-text-secondary: #909399;
  --color-text-placeholder: #C0C4CC;

  /* 边框 */
  --border-color-base: #DCDFE6;
  --border-color-light: #E4E7ED;
  --border-color-lighter: #EBEEF5;
  --border-color-extra-light: #F2F6FC;

  /* 背景颜色 */
  --background-color-base: #F5F7FA;

  color: var(--color-text-primary);
  background-color: var(--background-color-base);
}

.theme-dark {
  /* 基础 */
  --color-primary: #409EFF;
  --color-success: #67C23A;
  --color-warning: #E6A23C;
  --color-danger: #F56C6C;
  --color-info: #909399;

  /* 文字 */
  --color-text-primary: #303133;
  --color-text-regular: #606266;
  --color-text-secondary: #909399;
  --color-text-placeholder: #C0C4CC;

  /* 边框 */
  --border-color-base: #DCDFE6;
  --border-color-light: #E4E7ED;
  --border-color-lighter: #EBEEF5;
  --border-color-extra-light: #F2F6FC;

  /* 背景颜色 */
  --background-color-base: #000;

  color: var(--color-text-primary);
  background-color: var(--background-color-base);
}
</style>