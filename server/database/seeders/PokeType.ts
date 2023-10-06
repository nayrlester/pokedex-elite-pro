import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PokeType from 'App/Models/PokeType'

export default class PokeTypeSeeder extends BaseSeeder {
  public async run () {
    await PokeType.createMany([
      {
        name: 'Grass'
      },
      {
        name: 'Poison'
      },
      {
        name: 'Normal'
      },
      {
        name: 'Fighting'
      },
      {
        name: 'Flying'
      },
      {
        name: 'Ground'
      },
      {
        name: 'Rock'
      },
      {
        name: 'Bug'
      },
      {
        name: 'Ghost'
      },
      {
        name: 'Steel'
      },
      {
        name: 'Fire'
      },
      {
        name: 'Water'
      },
      {
        name: 'Grass'
      },
      {
        name: 'Electric'
      },
      {
        name: 'Psychic'
      },
      {
        name: 'Ice'
      },
      {
        name: 'Dragon'
      },
      {
        name: 'Dark'
      },
      {
        name: 'Fairy'
      },
    ])
  }
}
