import { Router } from 'express'

import { MySqlRankingRepository } from '../repositories/MySql/mySql-ranking-repository'
import { RankingController } from '../controllers/ranking-controller'

import GetRankings from '../../application/get-rankings'
import GetWinner from '../../application/get-winner'
import GetLoser from '../../application/get-loser'

const mySqlRankingRepository = new MySqlRankingRepository()
const getRankings = new GetRankings(mySqlRankingRepository)
const getWinner = new GetWinner(mySqlRankingRepository)
const getLoser = new GetLoser(mySqlRankingRepository)
const rankingController = new RankingController(getRankings, getWinner, getLoser)

const rankingRouter = Router()

rankingRouter.get('/', rankingController.getRankingAndAverage.bind(rankingController))
rankingRouter.get('/winner', rankingController.getWinnerPlayer.bind(rankingController))
rankingRouter.get('/loser', rankingController.getLoserPlayer.bind(rankingController))

export default rankingRouter
