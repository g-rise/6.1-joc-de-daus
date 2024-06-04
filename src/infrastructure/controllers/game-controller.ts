import { Request, Response } from 'express'
import PlayGame from '../../application/play-game'
import FindPlayerById from '../../application/find-player-by-id'
import DeleteAllGames from '../../application/delete-all-games'
import ListAllGamesForPlayer from '../../application/list-all-games-for-player'

export class GameController {
  constructor(
    private playGame: PlayGame,
    private findPlayerById: FindPlayerById,
    private listAllGamesForPlayer: ListAllGamesForPlayer,
    private deleteAllGames: DeleteAllGames
  ) {}

  async addGame(req: Request, res: Response): Promise<void> {
    try {
      const id: number = +req.params.id
      console.log(id)
      const player = await this.findPlayerById.run(id)
      if (player) {
        const newGame = await this.playGame.run(id)
        res.status(201).json(newGame)
      } else {
        res.status(400).json({ message: "No s'ha trobat cap usuari amb aquest id" })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  async getAllGames(req: Request, res: Response): Promise<void> {
    try {
      const id: number = +req.params.id
      const player = await this.findPlayerById.run(id)
      if (player === null) {
        res.status(404).json({ message: `No s'ha trobat el jugador amb id: ${id}` })
      }
      const games = await this.listAllGamesForPlayer.run(id)
      if (player !== null && games.length === 0) {
        res.status(200).json({
          message: `El jugador ${player.name} encara no ha efectuat cap tirada.`
        })
      } else if (player !== null) {
        res.status(200).json({ jugador: player.name, games })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  async deleteAllGamesByPlayer(req: Request, res: Response): Promise<void> {
    try {
      const id: number = +req.params.id
      const player = await this.findPlayerById.run(id)
      console.log(id)
      if (player === null) {
        res.status(404).json({ message: `No s'ha trobat el jugador amb id: ${id}` })
      } else {
        await this.deleteAllGames.run(id)
        res.status(200).json({
          message: `El jugador ${player.name} ja no té cap tirada de daus associada`
        })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }
}
