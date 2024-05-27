import IPlayerRepository from '../domain/player/IPlayer-repository'

export default class FindPlayerById {
  constructor(private playerRepository: IPlayerRepository) {}

  async run(id: number) {
    return this.playerRepository.findPlayerById(id)
  }
}
