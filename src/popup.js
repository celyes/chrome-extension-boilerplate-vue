import { createApp } from 'vue'
import Example from '@/components/Example'
// create vue apps
const app = createApp(Example)

app.use(router)

// mount the application...
app.mount('#app')