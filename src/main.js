import { createApp } from 'vue';
import App from './App.vue';
import  VueTruncateReadmore  from 'vue-truncate-read-more';

const app = createApp(App);

app.use(VueTruncateReadmore);
app.mount('#app');
