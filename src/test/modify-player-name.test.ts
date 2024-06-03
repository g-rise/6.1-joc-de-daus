import ModifyPlayerName from '../application/modify-player-name'
import { MySqlPlayerRepository } from '../infrastructure/repositories/MySql/mySql-player-repository'
import IPlayer from '../domain/player/IPlayer'
import Player from '../infrastructure/models/MySql/player.model'

jest.mock('../infrastructure/models/MySql/player.model')

describe('ModifyPlayerName with MySqlPlayerRepository', () => {
  let modifyPlayerName: ModifyPlayerName
  let playerRepository: MySqlPlayerRepository
  let mockPlayer: IPlayer

  beforeEach(() => {
    playerRepository = new MySqlPlayerRepository()
    modifyPlayerName = new ModifyPlayerName(playerRepository)

    mockPlayer = {
      id: 1,
      name: 'Nom a modificar',
      register: new Date()
    } as IPlayer

    Player.create(mockPlayer)
    jest.spyOn(playerRepository, 'findPlayerById').mockResolvedValue(mockPlayer)
    jest.spyOn(playerRepository, 'updatePlayerName').mockImplementation(async (id: number, name: string) => {
      if (mockPlayer.id === id) {
        mockPlayer.name = name
      }
    })
  })

  test('It should change the name of player', async () => {
    const playerId = 1
    const newName = 'Soc el nou nom'
    console.log(mockPlayer)

    await modifyPlayerName.run(playerId, newName)

    expect(playerRepository.updatePlayerName).toHaveBeenCalledWith(playerId, newName)
    // verifico el nou nom del jugador
    const updatedPlayer = await playerRepository.findPlayerById(playerId)
    console.log(updatedPlayer)
    expect(updatedPlayer!.name).toBe(newName)
  })
})
