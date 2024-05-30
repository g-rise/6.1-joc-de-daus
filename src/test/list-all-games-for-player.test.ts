import ListAllGamesForPlayer from '../application/list-all-games-for-player'
import { MySqlGameRepository } from '../infrastructure/repositories/MySql/mySql-game-repository'
import Game from '../infrastructure/models/MySql/game.model'

jest.mock('../infrastructure/models/MySql/game.model')

describe('ListAllGamesForPlayer with ', () => {
  let listAllGamesForPlayer: ListAllGamesForPlayer
  let mockGameRepository: MySqlGameRepository
  let mockGames: Game[]

  beforeEach(() => {
    mockGameRepository = new MySqlGameRepository()
    listAllGamesForPlayer = new ListAllGamesForPlayer(mockGameRepository)

    mockGames = [
      {
        id: 1,
        playerId: 1,
        dice1: 4,
        dice2: 3,
        result: 'WIN',
        createdAt: new Date()
      },
      {
        id: 2,
        playerId: 1,
        dice1: 4,
        dice2: 5,
        result: 'LOST',
        createdAt: new Date()
      }
    ] as Game[]

    const gamesMock = Game.findAll as jest.Mock //mockResolvedValue(mockGames)
    gamesMock.mockReturnValue(mockGames)
  })

  test('Hauria de tornar totes les jugades de un jugador', async () => {
    const idPlayer = 1

    const gamesPlayed = await listAllGamesForPlayer.run(idPlayer)

    console.log(gamesPlayed)

    expect(gamesPlayed).toBeTruthy
    expect(gamesPlayed.length).toEqual(mockGames.length)
    expect(gamesPlayed[0].result).toEqual(mockGames[0].result)

    // expect(mockGameRepository.getAllGames).toHaveBeenCalledWith(idPlayer)
    expect(Game.findAll).toHaveBeenCalledWith({ where: { playerId: idPlayer } })
  })
})
