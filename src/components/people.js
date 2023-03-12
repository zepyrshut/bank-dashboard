import { peopleDummy } from '../data/dummyData'

export function people () {
  return {
    isLoading: false,
    isError: false,
    person: {
      id: 0,
      name: ''
    },
    people: [],
    init () {
      this.reloadData()
    },
    reloadData () {
      this.isLoading = true
      setTimeout(() => {
        this.people = peopleDummy
        this.isLoading = false
      }, 1)
    }
  }
}
