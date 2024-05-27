import IGame from '../domain/game/IGame'
import IGameRepository from '../domain/game/IGame-repository'

export default class PlayGame {
  constructor(
    // private playerRepository: IPlayerRepository,
    private gameRepository: IGameRepository
  ) {}

  async run(id: number): Promise<IGame> {
    return this.gameRepository.addGame(id)
  }
}
