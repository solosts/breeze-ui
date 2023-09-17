<!-- 菜单容器 -->
<template>
  <div class="b-nav-menu" :style="`flex-direction:${mode == 'horizontal' ? 'row' : 'column'}`">
    <template class="b-sub-menu" v-for="subMenu in  options " :key="subMenu.key">
      <div v-if="subMenu.children && subMenu.children.length > 0" class="b-sub-menu"></div>
      <div v-else class="b-menu-item" :class="activeKey === subMenu.key && 'active-item'"
        @click="activeChange(subMenu.key)">{{ subMenu.label }}</div>
    </template>
  </div>
</template>
<script setup lang='ts'>
import { PropType, VNode, VNodeChild, ref } from 'vue';

export type MenuOption = {
  key: string;
  label: string | (() => VNodeChild);
  icon?: () => VNode;
  disabled?: boolean;
  show?: boolean;
  children?: MenuOption[];
}

const props = defineProps({
  // 布局排列方式   vertical：垂直排列  horizontal：水平排列
  mode: {
    type: String,
    default: 'vertical'
  },
  // 菜单项
  options: {
    type: Array as PropType<MenuOption[]>,
    default: () => []
  }
})

const activeKey = ref(props.options[0].key);
const activeChange = (key: string) => {
  activeKey.value = key;
}
</script>
<style lang='scss' scoped>
.b-nav-menu,
.b-sub-menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.b-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
}

.b-sub-menu,
.b-menu-item {
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
}

.active-item {
  color: var(--color-primary);
}
</style>