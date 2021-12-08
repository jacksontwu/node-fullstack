import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router/index';

import ElementPlus from './plugins/element-plus';
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
