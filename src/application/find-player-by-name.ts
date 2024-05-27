import IPlayerRepository from '../domain/player/IPlayer-repository'

export default class FindPlayerByName {
  constructor(private playerRepository: IPlayerRepository) {}

  async run(name: string) {
    return this.playerRepository.findPlayerByName(name)
  }
}
