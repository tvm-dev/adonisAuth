import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {msg: 'Bem Vindo ao pMoney!' }
})

Route.resource('/transactions', 'TransactionsController').apiOnly()
