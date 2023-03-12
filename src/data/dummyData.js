export const transactionsDummy = [
  {
    id: 1,
    movementTypeId: 0,
    typeId: 1,
    date: new Date('2023-03-01 8:17').toLocaleString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }),
    description: 'Pago de servicios',
    name: 'Gas Natural',
    amount: -12785
  },
  {
    id: 2,
    movementTypeId: 0,
    typeId: 1,
    date: new Date('2023-03-12 22:33').toLocaleString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }),
    description: 'Restaurantes',
    name: 'Pizzería Irina',
    amount: -2330
  },
  {
    id: 3,
    movementTypeId: 1,
    typeId: 1,
    date: new Date('2023-03-15 12:45').toLocaleString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }),
    description: 'Bizum',
    name: 'Bizum de Juan',
    amount: 2500
  },
  {
    id: 4,
    movementTypeId: 2,
    typeId: 1,
    date: new Date('2023-03-17 15:45').toLocaleString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }),
    description: 'Ahorros',
    name: 'Traspaso propio',
    amount: 25000
  },
  {
    id: 5,
    movementTypeId: 0,
    typeId: 1,
    date: new Date('2023-03-18 18:45').toLocaleString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }),
    description: 'Supermercados',
    name: 'Supermercado La Anónima',
    amount: -7412
  }
]

export const peopleDummy = [
  {
    id: 1,
    name: 'Juan'
  },
  {
    id: 2,
    name: 'Ana'
  },
  {
    id: 3,
    name: 'Luis'
  }
]

export const cardsDummy = [
  {
    id: 1,
    typeId: 1,
    balance: 38289,
    number: '**** 9867'
  },
  {
    id: 2,
    typeId: 2,
    balance: 56728,
    number: '**** 4567'
  }
]
