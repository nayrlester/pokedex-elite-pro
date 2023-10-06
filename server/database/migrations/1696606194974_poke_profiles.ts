import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PokeProfiles extends BaseSchema {
  protected tableName = 'poke_profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().index('id')
      table.string('name').notNullable()
      table.json('base').notNullable()
      table.string('image').notNullable()
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
