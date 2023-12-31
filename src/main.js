import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

library.add(faCoffee, faPatreon)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
