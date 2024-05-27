import IRankingRepository from '../domain/ranking/IRanking-repository'

export default class GetLoser {
  constructor(private rankingRepository: IRankingRepository) {}

  async run() {
    return this.rankingRepository.getLoser()
  }
}
