import IRankingRepository from '../domain/ranking/IRanking-repository'

export default class GetRankings {
  constructor(private rankingRepository: IRankingRepository) {}

  async run() {
    return this.rankingRepository.getRanking()
  }
}
