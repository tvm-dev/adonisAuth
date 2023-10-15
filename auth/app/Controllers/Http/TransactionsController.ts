import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction'

export default class TransactionsController {
  public async index({}: HttpContextContract) {

    const transactions = await Transaction.all()
    return transactions
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only([ 'date', 'type', 'description', 'value', 'category', 'details' ])
    const transaction = await Transaction.create(data)
    return transaction
  }

  public async show({ params}: HttpContextContract) {
    const transaction = await Transaction.findOrFail(params.id)
    return transaction
  }

  public async update({request, params}: HttpContextContract) {
    const transaction = await Transaction.findOrFail(params.id)
    const data = request.only([ 'date', 'type', 'description', 'value', 'category', 'details' ])
    transaction.merge(data)
    await transaction.save()
    return transaction
  }

  public async destroy({ params}: HttpContextContract) {
    const transaction = await Transaction.findOrFail(params.id)
    await transaction.delete()
  }
}
