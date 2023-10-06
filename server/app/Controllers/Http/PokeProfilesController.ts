import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PokeProfile from 'App/Models/PokeProfile'

export default class PokeProfilesController {
  public async index({response}: HttpContextContract) {
    const profile = await PokeProfile
                          .query()
                          .preload('type', (types => { 
                            types.preload('pokemon_type')
                          }))
    return response
            .status(200)
            .send({message: 'Success', result: profile, error: false})
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({response, params}: HttpContextContract) {
    const profile = await PokeProfile
                          .query()
                          .where('id',params.id)
                          .preload('type', (types => { 
                            types.preload('pokemon_type')
                          }))
    console.log(profile)
    return response
            .status(200)
            .send({message: 'Success', result: profile, error: false})
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
