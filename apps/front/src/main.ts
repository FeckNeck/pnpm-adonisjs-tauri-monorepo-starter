import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin);
app.mount('#app');
