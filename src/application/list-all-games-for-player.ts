import IGame from '../domain/game/IGame'
import IGameRepository from '../domain/game/IGame-repository'

export default class ListAllGamesForPlayer {
  constructor(private gameRepository: IGameRepository) {}

  async run(playerId: number): Promise<IGame[]> {
    return this.gameRepository.getAllGames(playerId)
  }
}
