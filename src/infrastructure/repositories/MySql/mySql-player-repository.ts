import IPlayerRepository from '../../../domain/player/IPlayer-repository'
import IPlayer from '../../../domain/player/IPlayer'
import Player from '../../models/MySql/player.model'
import Game from '../../models/MySql/game.model'
import successRateCalculator from '../../../domain/utilities/successRateCalculator'
import IPlayerWithSuccessRate from '../../../domain/player/IPlayerWithSuccessRate'

export class MySqlPlayerRepository implements IPlayerRepository {
  async addPlayer(name: string): Promise<IPlayer> {
    const newplayer = Player.create({ name: name })
    return newplayer
  }

  async findPlayerByName(name: string): Promise<IPlayer | null> {
    const player = Player.findOne({ where: { name } })
    return player
  }

  async findPlayerById(id: number): Promise<IPlayer | null> {
    const player = Player.findByPk(id)
    return player
  }

  async updatePlayerName(id: number, name: string): Promise<void> {
    Player.update({ name: name }, { where: { id: id } })
  }

  async getAllPlayersWithSuccessRate(): Promise<IPlayerWithSuccessRate[]> {
    const players = await Player.findAll({
      include: [
        {
          model: Game,
          as: 'games'
        }
      ]
    })

    const playersWithSuccessRate = players.map((player) => {
      const gamesTotals: Game[] = player.games || []
      const successPercent: number = successRateCalculator(gamesTotals)

      return {
        id: player.id,
        name: player.name,
        register: player.register,
        successRate: successPercent
      } as IPlayerWithSuccessRate // Retorno un objecte literale com si fos una interface
    })

    return playersWithSuccessRate
  }
}
