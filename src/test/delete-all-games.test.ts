import DeleteAllGames from '../application/delete-all-games'
import { MySqlGameRepository } from '../infrastructure/repositories/MySql/mySql-game-repository'
import Game from '../infrastructure/models/MySql/game.model'

jest.mock('../infrastructure/models/MySql/game.model')

describe('DeleteAllGames with MySqlGameRepository', () => {
  let deleteAllGames: DeleteAllGames
  let mySqlGameRepository: MySqlGameRepository
  // let mockGames: Game[]

  beforeEach(() => {
    mySqlGameRepository = new MySqlGameRepository()
    deleteAllGames = new DeleteAllGames(mySqlGameRepository)

    // Mock the Game.destroy method to simulate database behavior
    const mockGames = Game.destroy as jest.Mock
    mockGames.mockResolvedValue(undefined)
  })

  test("hauria de cancel·lar totes les jugades d'un jugador", async () => {
    const playerId = 1
    await deleteAllGames.run(playerId)

    // Verify that the destroy method was called with the correct where clause
    expect(Game.destroy).toHaveBeenCalledWith({ where: { playerId } })
  })

  /*
  test("hauria de retornar error si no s'executa correctament", async () => {
    const playerId = 1
    ;(Game.destroy as jest.Mock).mockRejectedValue(new Error('Failed to delete games'))

    await expect(deleteAllGames.run(playerId)).rejects.toThrow('Failed to delete games');
  })
  */
})
