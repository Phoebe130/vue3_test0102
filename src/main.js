// import '../src/styles/main.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)
library.add(faShoppingCart, faInstagram, faFacebookSquare, fab)

app.use(router).mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case
