import IRanking from '../../../domain/ranking/IRanking'
import IRankingRepository from '../../../domain/ranking/IRanking-repository'
import sortPlayerWithSuccessRate from '../../../domain/utilities/sortPlayerWithSuccessRate'
import successRateCalculator from '../../../domain/utilities/successRateCalculator'
import Game from '../../models/MySql/game.model'
import Player from '../../models/MySql/player.model'

export class MySqlRankingRepository implements IRankingRepository {
  // eslint-disable-next-line prettier/prettier
  async getRanking(): Promise<{ ranking: IRanking[]; averageSuccessRate: number }> {
    const players = await Player.findAll({
      include: [
        {
          model: Game,
          as: 'games'
        }
      ]
    })
    const playersWithGames = players.filter(player => player.games?.length !== 0)

    const playersWithSuccessRate = playersWithGames.map(player => {
      const gamesTotals: Game[] = player.games || []
      const successPercent: number = successRateCalculator(gamesTotals)

      return {
        playerId: player.id,
        playerName: player.name,
        successRate: successPercent
      } as IRanking
    })

    console.log(playersWithSuccessRate)

    const ranking = sortPlayerWithSuccessRate(playersWithSuccessRate)

    const totalGames = await Game.findAll()
    console.log(totalGames.length)
    const winGames = totalGames.filter(game => game.result === 'WIN')
    console.log(winGames.length)
    // eslint-disable-next-line prettier/prettier
    const averageSuccRate = +((winGames.length / totalGames.length) * 100).toFixed(2)

    return { ranking: ranking, averageSuccessRate: averageSuccRate }
  }

  async getWinner(): Promise<IRanking> {
    const rankingWithAverage = this.getRanking()
    const { ranking } = await rankingWithAverage
    const winner: IRanking = ranking[0]
    return winner
  }

  async getLoser(): Promise<IRanking> {
    const rankingWithAverage = this.getRanking()
    const { ranking } = await rankingWithAverage
    const loser: IRanking = ranking[ranking.length - 1]
    return loser
  }
}
