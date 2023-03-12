import { transactionsDummy } from '../data/dummyData'

export function transactions () {
  return {
    isLoading: false,
    isError: false,
    transaction: {
      id: 0,
      movementTypeId: 0,
      typeId: 0,
      date: '',
      description: '',
      name: '',
      amount: 0
    },
    transactions: [],
    init () {
      this.reloadData()
    },
    reloadData () {
      this.isLoading = true
      setTimeout(() => {
        this.transactions = transactionsDummy
        this.isLoading = false
      }, 1)
    }
  }
}
