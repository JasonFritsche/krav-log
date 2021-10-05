import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { store } from './store'
import { firebaseInit } from './services/firebaseService'

firebaseInit()

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

// createApp(App).use(router).use(store).mount('#app')
