import PlayGame from '../application/play-game'
import { MySqlGameRepository } from '../infrastructure/repositories/MySql/mySql-game-repository'
import Game from '../infrastructure/models/MySql/game.model'

jest.mock('../infrastructure/models/MySql/game.model')

describe('PlayGame with MySqlGameRepository', () => {
  let playGame: PlayGame
  let mySqlGameRepository: MySqlGameRepository
  let mockGame: Game

  beforeEach(() => {
    mySqlGameRepository = new MySqlGameRepository()
    playGame = new PlayGame(mySqlGameRepository)

    mockGame = {
      id: 1,
      dice1: 1,
      dice2: 4,
      result: 'LOST',
      createdAt: new Date(),
      playerId: 1 // S'assegura d'incloure playerId
    } as Game
    Game.create(mockGame)

    jest.spyOn(mySqlGameRepository, 'addGame').mockResolvedValue(mockGame)
  })

  test('It should return a new game for the player', async () => {
    const idPlayer = 1
    const newGame = await playGame.run(idPlayer)
    console.log(newGame)

    expect(newGame.result).toBe(mockGame.result)
    expect(mySqlGameRepository.addGame).toHaveBeenCalledWith(idPlayer)
  })
})
