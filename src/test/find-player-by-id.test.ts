import FindPlayerById from '../application/find-player-by-id'
import { MySqlPlayerRepository } from '../infrastructure/repositories/MySql/mySql-player-repository'
import Player from '../infrastructure/models/MySql/player.model'
import IPlayer from '../domain/player/IPlayer'

jest.mock('../infrastructure/models/MySql/player.model')

describe('FindPlayerByName with MySqlPlayerRepository', () => {
  let findPlayerById: FindPlayerById
  let playerRepository: MySqlPlayerRepository
  let mockPlayer: IPlayer

  beforeEach(() => {
    playerRepository = new MySqlPlayerRepository()
    findPlayerById = new FindPlayerById(playerRepository)

    const idPlayer = 1
    mockPlayer = {
      id: idPlayer,
      name: 'PlayerAmbId',
      register: new Date()
    } as IPlayer

    Player.create(mockPlayer)
  })

  test('should return a player if it ID number exist', async () => {
    const playerId = 1
    console.log(mockPlayer)
    jest.spyOn(playerRepository, 'findPlayerById').mockResolvedValue(mockPlayer)

    const player = await findPlayerById.run(playerId)
    // console.log(player)

    expect(player).toBeDefined()
    expect(player!.id).toBe(playerId)
    expect(player!.id).toBe(1)

    // Verificamos que findById ha sigut cridat amb l'argument correcte
    expect(playerRepository.findPlayerById).toHaveBeenCalledWith(playerId)
  })

  test('should return null if the ID number does not exist', async () => {
    const playerId = 2
    console.log(mockPlayer)

    // Mock del mètode findPlayerByName perquè torni null
    jest.spyOn(playerRepository, 'findPlayerById').mockResolvedValue(null)

    const player = await findPlayerById.run(playerId)
    console.log(player)

    expect(player).toBe(null)

    // Verificar que findPlayerByName es va cridar amb l'argument correcte
    expect(playerRepository.findPlayerById).toHaveBeenCalledWith(playerId)
  })
})
