import IGame from '../game/IGame'

export default function successRateCalculator(games: IGame[]): number {
  const winGames: number = games.filter((game) => game.result === 'WIN').length
  return games.length > 0 ? +((winGames / games.length) * 100).toFixed(2) : 0
}
