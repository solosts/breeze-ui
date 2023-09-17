<template>
  <b-config-theme :theme="theme">
    <b-layout class="vwh-full">
      <b-layout-header style="border-bottom: 1px solid var(--border-color-base);">
        <div class="flex-r-between h-full pad-lr-32">
          <div @click="toPage('/')" class="flex-r-start b-pointer algin-c gap10 w240">
            <svg-icons name="svg-logo" color="var(--color-primary)" :size="36"></svg-icons>
            <span class="f-18">Breeze UI</span>
          </div>
          <div class="flex-r-start flex-1">
            <b-menu mode="horizontal" :options="menuOptions"></b-menu>
          </div>
          <div class="flex-r-end algin-c f-14 gap30">
            <span v-if="theme === 'dark'" @click="theme = 'light'">深色</span>
            <span v-if="theme === 'light'" @click="theme = 'dark'">浅色</span>
            <span><a class="link" href="https://github.com/solosts/breeze-ui.git" target="_blank">GitHub</a></span>
            <span>0.0.1</span>
          </div>
        </div>
      </b-layout-header>
      <b-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </b-layout-content>
    </b-layout>
  </b-config-theme>
</template>

<script setup lang="ts">
import BConfigTheme from "@/components/theme/BConfigTheme.vue";
import BLayout from "@/components/layout/BLayout.vue";
import BLayoutHeader from "@/components/layout/BLayoutHeader.vue";
import BLayoutContent from "@/components/layout/BLayoutContent.vue";
import BMenu, { MenuOption } from "@/components/menu/BMenu.vue";
import { toPage } from "@/utils/common";
import { ref } from "vue";

const menuOptions: MenuOption[] = [{
  key: 'home',
  label: '首页',
}, {
  key: 'doc',
  label: '文档',
}, {
  key: 'module',
  label: '组件',
}]

const theme = ref<'light' | 'dark'>('light')
</script>

<style lang='scss' scoped>
.link {
  color: inherit;
  text-decoration: none;
}
</style>
