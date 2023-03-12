import { cardsDummy } from '../data/dummyData'

export function cards () {
  return {
    isLoading: false,
    isError: false,
    card: {
      id: 0,
      typeId: 0,
      balance: 0,
      number: ''
    },
    cards: [],
    init () {
      this.reloadData()
    },
    reloadData () {
      this.isLoading = true
      setTimeout(() => {
        this.cards = cardsDummy
        this.isLoading = false
      }, 3000)
    }
  }
}
