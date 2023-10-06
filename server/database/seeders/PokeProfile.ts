import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PokeProfile from 'App/Models/PokeProfile'

export default class PokeProfileSeeder extends BaseSeeder {
  public async run () {
    await PokeProfile.createMany([
      {
        name: "Bulbasaur",
        base: JSON.stringify([{
          "HP": 45,
          "Attack": 49,
          "Defense": 49,
          "Sp. Attack": 65,
          "Sp. Defense": 65,
          "Speed": 45
        }])
      },
      {
        name: "Ivysaur",
        base: JSON.stringify([{
          "HP": 60,
          "Attack": 62,
          "Defense": 63,
          "Sp. Attack": 80,
          "Sp. Defense": 80,
          "Speed": 60
        }])
      },
      {
        name: "Venusaur",
        base: JSON.stringify([{
          "HP": 80,
          "Attack": 82,
          "Defense": 83,
          "Sp. Attack": 100,
          "Sp. Defense": 100,
          "Speed": 80
        }])
      },
      {
        name: "Charmander",
        base: JSON.stringify([{
          "HP": 39,
          "Attack": 52,
          "Defense": 43,
          "Sp. Attack": 60,
          "Sp. Defense": 50,
          "Speed": 65
        }])
      },
      {
        name: "Charmander",
        base: JSON.stringify([{
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Sp. Attack": 80,
          "Sp. Defense": 65,
          "Speed": 80
        }])
      },
      {
        name: "Charmeleon",
        base: JSON.stringify([{
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Sp. Attack": 80,
          "Sp. Defense": 65,
          "Speed": 80
        }])
      },
      {
        name: "Charizard",
        base: JSON.stringify([{
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Sp. Attack": 109,
          "Sp. Defense": 85,
          "Speed": 100
        }])
      },
      {
        name: "Squirtle",
        base: JSON.stringify([{
          "HP": 44,
          "Attack": 48,
          "Defense": 65,
          "Sp. Attack": 50,
          "Sp. Defense": 64,
          "Speed": 43
        }])
      },
      {
        name: "Wartortle",
        base: JSON.stringify([{
          "HP": 59,
          "Attack": 63,
          "Defense": 80,
          "Sp. Attack": 65,
          "Sp. Defense": 80,
          "Speed": 58
        }])
      },
      {
        name: "Blastoise",
        base: JSON.stringify([{
          "HP": 79,
          "Attack": 83,
          "Defense": 100,
          "Sp. Attack": 85,
          "Sp. Defense": 105,
          "Speed": 78
        }])
      },
      {
        name: "Caterpie",
        base: JSON.stringify([{
          "HP": 45,
          "Attack": 30,
          "Defense": 35,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 45
        }])
      },
      {
        name: "Metapod",
        base: JSON.stringify([{
          "HP": 50,
          "Attack": 20,
          "Defense": 55,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 30
        }])
      },
      {
        name: "Butterfree",
        base: JSON.stringify([{
          "HP": 60,
          "Attack": 45,
          "Defense": 50,
          "Sp. Attack": 90,
          "Sp. Defense": 80,
          "Speed": 70
        }])
      },
      {
        name: "Weedle",
        base: JSON.stringify([{
          "HP": 40,
          "Attack": 35,
          "Defense": 30,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 50
        }])
      },
      {
        name: "Kakuna",
        base: JSON.stringify([{
          "HP": 45,
          "Attack": 25,
          "Defense": 50,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 35
        }])
      },
      {
        name: "Beedrill",
        base: JSON.stringify([{
          "HP": 65,
          "Attack": 90,
          "Defense": 40,
          "Sp. Attack": 45,
          "Sp. Defense": 80,
          "Speed": 75
        }])
      },
      {
        name: "Pidgey",
        base: JSON.stringify([{
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Sp. Attack": 35,
          "Sp. Defense": 35,
          "Speed": 56
        }])
      },
      {
        name: "Pidgeotto",
        base: JSON.stringify([{
          "HP": 63,
          "Attack": 60,
          "Defense": 55,
          "Sp. Attack": 50,
          "Sp. Defense": 50,
          "Speed": 71
        }])
      },
      {
        name: "Pidgeot",
        base: JSON.stringify([{
          "HP": 83,
          "Attack": 80,
          "Defense": 75,
          "Sp. Attack": 70,
          "Sp. Defense": 70,
          "Speed": 101
        }])
      },
      {
        name: "Rattata",
        base: JSON.stringify([{
          "HP": 30,
          "Attack": 56,
          "Defense": 35,
          "Sp. Attack": 25,
          "Sp. Defense": 35,
          "Speed": 72
        }])
      },
      {
        name: "Raticate",
        base: JSON.stringify([{
          "HP": 55,
          "Attack": 81,
          "Defense": 60,
          "Sp. Attack": 50,
          "Sp. Defense": 70,
          "Speed": 97
        }])
      },
    ])
  }
}
