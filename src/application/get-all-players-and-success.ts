import IPlayerRepository from '../domain/player/IPlayer-repository'

export default class GetAllPlayersAndSuccess {
  constructor(private playerRepository: IPlayerRepository) {}

  async run() {
    return this.playerRepository.getAllPlayersWithSuccessRate()
  }
}
