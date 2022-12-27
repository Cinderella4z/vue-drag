import { createApp } from 'vue'
import App from './App.vue'
import drag from './directive/drag'

const app = createApp(App)
app.directive('drag', drag)
app.mount('#app')
