import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PokeTypeDatum from 'App/Models/PokeTypeDatum'

export default class PokeTypeDatumSeeder extends BaseSeeder {
  public async run () {
    await PokeTypeDatum.createMany([
      {
        pokeProfileId: 1,
        pokeTypeId: 1
      },
      {
        pokeProfileId: 1,
        pokeTypeId: 2
      },
      {
        pokeProfileId: 2,
        pokeTypeId: 1
      },
      {
        pokeProfileId: 2,
        pokeTypeId: 2
      },
      {
        pokeProfileId: 3,
        pokeTypeId: 1
      },
      {
        pokeProfileId: 3,
        pokeTypeId: 2
      },
      {
        pokeProfileId: 4,
        pokeTypeId: 11
      },
      {
        pokeProfileId: 5,
        pokeTypeId: 11
      },
      {
        pokeProfileId: 6,
        pokeTypeId: 11
      },
      {
        pokeProfileId: 7,
        pokeTypeId: 11
      },
      {
        pokeProfileId: 7,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 8,
        pokeTypeId: 12
      },
      {
        pokeProfileId: 9,
        pokeTypeId: 12
      },
      {
        pokeProfileId: 10,
        pokeTypeId: 12
      },
      {
        pokeProfileId: 11,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 12,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 13,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 13,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 14,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 14,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 15,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 15,
        pokeTypeId: 2
      },
      {
        pokeProfileId: 16,
        pokeTypeId: 8
      },
      {
        pokeProfileId: 16,
        pokeTypeId: 2
      },
      {
        pokeProfileId: 17,
        pokeTypeId: 3
      },
      {
        pokeProfileId: 17,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 18,
        pokeTypeId: 3
      },
      {
        pokeProfileId: 18,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 19,
        pokeTypeId: 3
      },
      {
        pokeProfileId: 19,
        pokeTypeId: 5
      },
      {
        pokeProfileId: 20,
        pokeTypeId: 3
      },
      {
        pokeProfileId: 21,
        pokeTypeId: 3
      },
    ])
  }
}
