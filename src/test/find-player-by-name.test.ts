// import FindPlayerByName from '../application/find-player-by-name'
// import IPlayerRepository from '../domain/player/IPlayer-repository'

// describe('FindPlayerByName', () => {
//   let findPlayerByName: FindPlayerByName
//   let mockPlayerRepository: IPlayerRepository

//   beforeEach(() => {
//     mockPlayerRepository = {
//       findPlayerByName: jest.fn()
//     } as jest.Mocked<IPlayerRepository>

//     findPlayerByName = new FindPlayerByName(mockPlayerRepository)
//   })

//   test('should return null if the player name already exists', async () => {
//     const existingPlayerName = 'John Doe'
//     const existingPlayer = { id: 1, name: existingPlayerName }
//     (mockPlayerRepository.findPlayerByName as jest.Mock).mockResolvedValue(existingPlayer)

//     const result = await findPlayerByName.run(existingPlayerName)

//     expect(result).toBe(existingPlayer)
//     expect(mockPlayerRepository.findPlayerByName).toHaveBeenCalledWith(existingPlayerName);
//   })

//   test('should return null if the player name does not exist', async () => {
//     const playerName = 'Marianna'
//     (mockPlayerRepository.findPlayerByName as jest.Mock).mockResolvedValue(null)

//     const result = await findPlayerByName.run(playerName)

//     expect(result).toBe(null)
//     expect(mockPlayerRepository.findPlayerByName).toHaveBeenCalledWith(playerName);
//   })
// })
import FindPlayerByName from '../application/find-player-by-name'
import { MySqlPlayerRepository } from '../infrastructure/repositories/MySql/mySql-player-repository'
import Player from '../infrastructure/models/MySql/player.model'
import IPlayer from '../domain/player/IPlayer'

jest.mock('../infrastructure/models/MySql/player.model')

describe('FindPlayerByName with MySqlPlayerRepository', () => {
  let findPlayerByName: FindPlayerByName
  let playerRepository: MySqlPlayerRepository

  beforeEach(() => {
    playerRepository = new MySqlPlayerRepository()
    findPlayerByName = new FindPlayerByName(playerRepository)

    const playerName = 'UsuariExistent'
    const mockPlayer = {
      id: 1,
      name: playerName,
      register: new Date()
    } as IPlayer
    jest.spyOn(playerRepository, 'findPlayerByName').mockResolvedValue(mockPlayer)

    Player.create(mockPlayer)
  })

  test('should return a player if it name exist', async () => {
    const playerName = 'UsuariExistent'

    // Mock del método findByName para que devuelva un jugador existente

    const player = await findPlayerByName.run(playerName)
    console.log(player)

    expect(player).toBeDefined()
    expect(player!.name).toBe(playerName)
    expect(player!.id).toBe(1)

    // Verificamos que findByName fue llamado con el argumento correcto
    expect(playerRepository.findPlayerByName).toHaveBeenCalledWith(playerName)
  })

  test('should return null if the name does not exist', async () => {
    const playerName = 'UsuariInexistent'

    // Mock del mètode findPlayerByName perquè torni null
    jest.spyOn(playerRepository, 'findPlayerByName').mockResolvedValue(null)

    const player = await findPlayerByName.run(playerName)
    console.log(player)

    expect(player).toBe(null)

    // Verificar que findPlayerByName es va cridar amb l'argument correcte
    expect(playerRepository.findPlayerByName).toHaveBeenCalledWith(playerName)
  })
})
