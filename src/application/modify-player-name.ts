import IPlayerRepository from '../domain/player/IPlayer-repository'

export default class ModifyPlayerName {
  constructor(private playerRepository: IPlayerRepository) {}

  async run(id: number, name: string): Promise<void> {
    await this.playerRepository.updatePlayerName(id, name)
  }
}
