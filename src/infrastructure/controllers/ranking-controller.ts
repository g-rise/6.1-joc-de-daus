import { Request, Response } from 'express'
import GetRankings from '../../application/get-rankings'
import GetWinner from '../../application/get-winner'
import GetLoser from '../../application/get-loser'

export class RankingController {
  constructor(
    private getRankings: GetRankings,
    private getWinner: GetWinner,
    private getLoser: GetLoser
  ) {}

  async getRankingAndAverage(req: Request, res: Response): Promise<void> {
    try {
      const ranking = await this.getRankings.run()
      res.status(200).json(ranking)
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  async getWinnerPlayer(req: Request, res: Response): Promise<void> {
    try {
      const winner = await this.getWinner.run()
      res.status(200).json(winner)
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  async getLoserPlayer(req: Request, res: Response): Promise<void> {
    try {
      const loser = await this.getLoser.run()
      res.status(200).json(loser)
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }
}
