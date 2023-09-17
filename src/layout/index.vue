<!-- 首页 -->
<template>
  <b-layout mode="horizontal">
    <b-layout-sider>sider</b-layout-sider>
    <b-layout>
      <b-layout-content>content</b-layout-content>
      <b-layout-footer>footer</b-layout-footer>
    </b-layout>
  </b-layout>
</template>
<script setup lang='ts'>
import BLayout from "@/components/layout/BLayout.vue";
import BLayoutSider from "@/components/layout/BLayoutSider.vue";
import BLayoutContent from "@/components/layout/BLayoutContent.vue";
import BLayoutFooter from "@/components/layout/BLayoutFooter.vue";
</script>
<style lang='scss' scoped></style>