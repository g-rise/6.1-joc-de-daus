import IPlayer from '../domain/player/IPlayer'
import IPlayerRepository from '../domain/player/IPlayer-repository'

export default class PlayerCreator {
  constructor(private playerRepository: IPlayerRepository) {}

  async run(name: string): Promise<IPlayer> {
    return this.playerRepository.addPlayer(name)
  }
}
