import IRankingRepository from '../domain/ranking/IRanking-repository'

export default class GetWinner {
  constructor(private rankingRepository: IRankingRepository) {}

  async run() {
    return this.rankingRepository.getWinner()
  }
}
