import IGame from './IGame'

export default interface IGameRepository {
  addGame(id: number): Promise<IGame>
  getAllGames(id: number): Promise<IGame[]>
  deleteAllGames(id: number): Promise<void>
  // viewAllGames(playerId: string): Promise<Game[] | null>
  // deleteAllGames(playerId: string): Promise<void>
}
