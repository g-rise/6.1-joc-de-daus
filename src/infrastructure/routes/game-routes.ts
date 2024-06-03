import { Router } from 'express'

import { MySqlGameRepository } from '../repositories/MySql/mySql-game-repository'
import { mysqlPlayerRepository } from './player-routes'
import { GameController } from '../controllers/game-controller'

import PlayGame from '../../application/play-game'
import FindPlayerById from '../../application/find-player-by-id'
import ListAllGamesForPlayer from '../../application/list-all-games-for-player'
import DeleteAllGames from '../../application/delete-all-games'

export const mySqlGameRepository = new MySqlGameRepository()
const playGame = new PlayGame(mySqlGameRepository)
const findPlayerById = new FindPlayerById(mysqlPlayerRepository)
const listAllGamesForPlayer = new ListAllGamesForPlayer(mySqlGameRepository)
const deleteAllGames = new DeleteAllGames(mySqlGameRepository)

const gameController = new GameController(playGame, findPlayerById, listAllGamesForPlayer, deleteAllGames)

const gameRouter = Router()

gameRouter.post('/:id', gameController.addGame.bind(gameController))
gameRouter.get('/:id', gameController.getAllGames.bind(gameController))
// eslint-disable-next-line prettier/prettier
gameRouter.delete('/:id', gameController.deleteAllGamesByPlayer.bind(gameController))

export default gameRouter
