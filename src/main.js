import Alpine from 'alpinejs'
import money from 'alpinejs-money'
import { cards } from './components/cards'
import { people } from './components/people'
import { transactions } from './components/transactions'

import './styles.scss'

window.Alpine = Alpine

Alpine.data('transactions', transactions)
Alpine.data('people', people)
Alpine.data('cards', cards)

Alpine.plugin(money)
Alpine.start()
