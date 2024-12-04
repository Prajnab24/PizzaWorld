import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/Header.vue'
import PizzaCards from './components/PizzaCards.vue'
import VolcanoPizza from './components/VolcanoPizza.vue'
import PizzaMania from './components/PizzaMania.vue'

const app = createApp(App)
app.component('Header', Header);
app.component('pizza-cards', PizzaCards);
app.component('volcano-pizza', VolcanoPizza);
app.component('pizza-mania', PizzaMania);
app.mount('#app')

