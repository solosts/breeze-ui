<template>
  <b-layout class="vwh-full">
    <b-layout-header>
      <div class="flex-r-between h-full pad-lr-32">
        <div @click="toPage('/')" class="flex-r-start b-pointer algin-c gap10">
          <svg-icons name="svg-logo" color="#409EFF" :size="36"></svg-icons>
          <span class="f-18">Breeze UI</span>
        </div>
        <div class="flex-r-start flex-1"></div>
        <div class="flex-r-end"></div>
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
</template>

<script setup lang="ts">
import BLayout from "@/components/layout/BLayout.vue";
import BLayoutHeader from "@/components/layout/BLayoutHeader.vue";
import BLayoutContent from "@/components/layout/BLayoutContent.vue";
import { getCurrentInstance } from "vue";

const { appContext: { config: { globalProperties: { toPage } } } }: any = getCurrentInstance();
</script>

<style lang='scss' scoped></style>
