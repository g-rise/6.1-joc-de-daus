import { Request, Response } from 'express'
import PlayerCreator from '../../application/player-creator'
import FindPlayerById from '../../application/find-player-by-id'
import FindPlayerByName from '../../application/find-player-by-name'
import ModifyPlayerName from '../../application/modify-player-name'
import GetAllPlayersAndSuccess from '../../application/get-all-players-and-success'

export class PlayerController {
  constructor(
    private playerCreator: PlayerCreator,
    private findPlayerById: FindPlayerById,
    private findPlayerByName: FindPlayerByName,
    private modifyPlayerName: ModifyPlayerName,
    private getAllPlayersAndSuccess: GetAllPlayersAndSuccess
  ) {}

  public async addPlayer(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body || {}
      const playerName = name || 'Anònim'

      const checkPlayer = await this.findPlayerByName.run(playerName) // Comprovació de si el nom del player ja existeix

      if (!checkPlayer || checkPlayer.name === 'Anònim') {
        const player = await this.playerCreator.run(playerName)
        res.status(201).json(player)
      } else {
        res
          .status(400)
          .json({ message: 'Ja existeix un usuari amb aquest nom' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  public async modifyName(req: Request, res: Response): Promise<void> {
    try {
      const id: number = +req.params.id
      const { name } = req.body || {}
      const playerName = name || 'Anònim'

      const player = await this.findPlayerById.run(id)
      const checkPlayer = await this.findPlayerByName.run(playerName)
      if (!player) {
        res
          .status(400)
          .json({ message: "No s'ha trobat cap usuari amb aquest id" })
      } else if (player && checkPlayer && checkPlayer.name !== 'Anònim') {
        res
          .status(400)
          .json({ message: 'Ja existeix un usuari amb aquest nom' })
      } else {
        await this.modifyPlayerName.run(id, playerName)
        res.status(200).json({ message: 'Jugador modificat correctament! ' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  }

  public async getAllPlayers(req: Request, res: Response): Promise<void> {
    const allPlayers = await this.getAllPlayersAndSuccess.run()
    res.status(200).json(allPlayers)
  }
}
