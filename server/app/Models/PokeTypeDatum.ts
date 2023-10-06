import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import PokeProfile from "App/Models/PokeProfile";
import PokeType from "App/Models/PokeType";

export default class PokeTypeDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pokeProfileId: number

  @column()
  public pokeTypeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => PokeType, {
    foreignKey: 'pokeTypeId'
  })
  public pokemon_type: BelongsTo<typeof PokeType>

  @hasMany(() => PokeProfile, {
    foreignKey: 'pokeProfileId'
  })
  public pokemon_profile: HasMany<typeof PokeProfile>
}
