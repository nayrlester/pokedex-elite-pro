import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Languages extends BaseSchema {
  protected tableName = 'languages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().index('id')
      table.string('code').nullable()
      table.string('value').nullable()
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
