import PlayerCreator from '../application/player-creator'
import { MySqlPlayerRepository } from '../infrastructure/repositories/MySql/mySql-player-repository'
import Player from '../infrastructure/models/MySql/player.model'

jest.mock('../infrastructure/models/MySql/player.model')

describe('PlayerCreator with MySqlPlayerRepository', () => {
  let playerCreator: PlayerCreator
  let playerRepository: MySqlPlayerRepository

  beforeEach(() => {
    playerRepository = new MySqlPlayerRepository()
    playerCreator = new PlayerCreator(playerRepository)
  })

  test('should add a new player and return it', async () => {
    const playerName = 'Marianna'

    // Mock the create method to return a new player object
    // eslint-disable-next-line prettier/prettier
    const mockPlayer = { id: 1, name: playerName, register: new Date()  } as Player
    const createMock = Player.create as jest.Mock
    createMock.mockResolvedValue(mockPlayer)

    const player = await playerCreator.run(playerName)

    expect(player).toBeDefined()
    expect(player.name).toBe(playerName)
    expect(player.id).toBe(1)

    // Verify that Player.create was called with the correct argument
    expect(Player.create).toHaveBeenCalledWith({ name: playerName })
  })

  test('should assign "Anònim" as the default name if no name is provided', async () => {
    const defaultName = 'Anònim'

    // Mock the create method to return a new player object with the default name
    // eslint-disable-next-line prettier/prettier
    const mockPlayer = { id: 2, name: defaultName, register: new Date() } as Player
    const createMock = Player.create as jest.Mock
    createMock.mockResolvedValue(mockPlayer)

    const player = await playerCreator.run(defaultName)

    expect(player).toBeDefined()
    expect(player.name).toBe(defaultName)
    expect(player.id).toBe(2)

    // Verify that Player.create was called with the correct argument
    expect(Player.create).toHaveBeenCalledWith({ name: defaultName })
  })
})
