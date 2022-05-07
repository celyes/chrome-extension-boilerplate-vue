import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import Example from '@/components/Example'
// create vue apps
const app = createApp(Example)

const routes = []
const router = createRouter({
    routes
})
app.use(router)

//environment
app.config.globalProperties.env = env

// mount the application...
app.mount('#app')