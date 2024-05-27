import IPlayer from './IPlayer'
import IPlayerWithSuccessRate from './IPlayerWithSuccessRate'

export default interface IPlayerRepository {
  addPlayer(name: string): Promise<IPlayer>
  findPlayerByName(name: string): Promise<IPlayer | null>
  findPlayerById(id: number): Promise<IPlayer | null>
  updatePlayerName(id: number, name: string): Promise<void>
  getAllPlayersWithSuccessRate(): Promise<IPlayerWithSuccessRate[]>
}
