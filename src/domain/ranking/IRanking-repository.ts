import IRanking from './IRanking'

export default interface IRankingRepository {
  getRanking(): Promise<{ ranking: IRanking[]; averageSuccessRate: number }>
  getWinner(): Promise<IRanking>
  getLoser(): Promise<IRanking>
}
