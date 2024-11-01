import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Number from './components/Number.vue'
import Display from './components/Display.vue'
import Operator from './components/Operator.vue'
import Parentheses from './components/Parentheses.vue'
import Clear from './components/Clear.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('number', Number)
app.component('operator', Operator)
app.component('display', Display)
app.component('parentheses', Parentheses)
app.component('clear', Clear)
app.mount('#app')

