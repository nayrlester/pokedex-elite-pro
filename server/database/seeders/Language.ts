import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Language from 'App/Models/Language'

export default class LanguageSeeder extends BaseSeeder {
  public async run () {
    await Language.createMany([
      {
        code: 'en',
        value: 'English'
      },
      {
        code: 'zh',
        value: 'Chinese'
      },
      {
        code: 'ja',
        value: 'Japanese'
      },
      {
        code: 'fr',
        value: 'French'
      },
    ])
  }
}
