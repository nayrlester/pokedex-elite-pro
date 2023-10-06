import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PokeTypeData extends BaseSchema {
  protected tableName = 'poke_type_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().index('id')
      table.integer('poke_profile_id').notNullable()
      table.integer('poke_type_id').notNullable()
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
