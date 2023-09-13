import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/style/common.scss';
import pinia from '@/store';
// 路由
import router from '@/router';

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app')