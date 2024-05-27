import IGame from '../../../domain/game/IGame'
import IGameRepository from '../../../domain/game/IGame-repository'
import getResult from '../../../domain/game/game-function/get-result'
import getDiceResult from '../../../domain/game/game-function/getDiceResult'
import Game from '../../models/MySql/game.model'

export class MySqlGameRepository implements IGameRepository {
  async addGame(id: number): Promise<IGame> {
    const dice1: number = getDiceResult()
    const dice2: number = getDiceResult()
    const result: 'WIN' | 'LOST' = getResult(dice1, dice2)

    const newGame = await Game.create({
      dice1: dice1,
      dice2: dice2,
      result: result,
      playerId: id // S'assegura d'incloure playerId
    })
    return newGame
  }

  async getAllGames(id: number): Promise<IGame[]> {
    const allGames = Game.findAll({ where: { playerId: id } })
    return allGames
  }

  async deleteAllGames(id: number): Promise<void> {
    await Game.destroy({ where: { playerId: id } })
  }
}
