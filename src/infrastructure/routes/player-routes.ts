import { Router } from 'express'

import { MySqlPlayerRepository } from '../repositories/MySql/mySql-player-repository'
import { PlayerController } from '../controllers/player-controller'

import PlayerCreator from '../../application/player-creator'
import FindPlayerByName from '../../application/find-player-by-name'
import ModifyPlayerName from '../../application/modify-player-name'
import FindPlayerById from '../../application/find-player-by-id'
import GetAllPlayersAndSuccess from '../../application/get-all-players-and-success'

export const mysqlPlayerRepository = new MySqlPlayerRepository()
const playerCreator = new PlayerCreator(mysqlPlayerRepository)
const findPlayerById = new FindPlayerById(mysqlPlayerRepository)
const findPlayerByName = new FindPlayerByName(mysqlPlayerRepository)
const modifyPlayerName = new ModifyPlayerName(mysqlPlayerRepository)
// eslint-disable-next-line prettier/prettier
const getAllPlayersAndSuccess = new GetAllPlayersAndSuccess(mysqlPlayerRepository)

// eslint-disable-next-line prettier/prettier
const playerController = new PlayerController(playerCreator, findPlayerById, findPlayerByName, modifyPlayerName, getAllPlayersAndSuccess)

const playerRouter = Router()

playerRouter.post('/', playerController.addPlayer.bind(playerController))
playerRouter.put('/:id', playerController.modifyName.bind(playerController))
playerRouter.get('/', playerController.getAllPlayers.bind(playerController))

export default playerRouter
