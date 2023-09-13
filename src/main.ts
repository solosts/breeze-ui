import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/style/common.scss';
import pinia from '@/store';
import router from '@/router';

// 组件
import SvgIcons from '@/components/SvgIcons.vue'

// vite-plugin-svg-icons      svg   显示
import 'virtual:svg-icons-register'

import { toPage, goBack } from './utils/common';

const app = createApp(App);
app.use(pinia);
app.use(router);


app.config.globalProperties.toPage = toPage;
app.config.globalProperties.goBack = goBack;
// 全局组件
app.component('SvgIcons', SvgIcons);

app.mount('#app')