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
// eslint-disable-next-line prettier/prettier
const rankingController = new RankingController(getRankings, getWinner, getLoser)

const rankingRouter = Router()

// eslint-disable-next-line prettier/prettier
rankingRouter.get('/', rankingController.getRankingAndAverage.bind(rankingController))
// eslint-disable-next-line prettier/prettier
rankingRouter.get('/winner', rankingController.getWinnerPlayer.bind(rankingController))
// eslint-disable-next-line prettier/prettier
rankingRouter.get('/loser', rankingController.getLoserPlayer.bind(rankingController))

export default rankingRouter
