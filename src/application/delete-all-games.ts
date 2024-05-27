import IGameRepository from '../domain/game/IGame-repository'

export default class DeleteAllGames {
  constructor(private gameRepository: IGameRepository) {}

  async run(id: number): Promise<void> {
    await this.gameRepository.deleteAllGames(id)
  }
}
