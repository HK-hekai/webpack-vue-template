import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(router).use(store).mount('#app');
