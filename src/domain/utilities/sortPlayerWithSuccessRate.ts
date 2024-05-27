import IRanking from '../ranking/IRanking'

export default function sortPlayerWithSuccessRate(players: IRanking[]) {
  return players.sort((a, b) => b.successRate - a.successRate)
}
