import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import directives from '@/directives'
const app = createApp(App)
import store from '@/store'

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)

})



app
    .use(router)
    .use(store)
    .mount('#app')
