import { DateTime } from 'luxon'
import { BaseModel, column, hasMany , HasMany } from '@ioc:Adonis/Lucid/Orm'
import PokeTypeDatum from "App/Models/PokeTypeDatum";

export default class PokeType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => PokeTypeDatum, {
    foreignKey: 'id'
  })
  public pokemonProfile: HasMany<typeof PokeTypeDatum>
}
