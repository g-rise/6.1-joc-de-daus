import Player from './player.model'
import Game from './game.model'

const defineAssociations = () => {
  Player.hasMany(Game, {
    sourceKey: 'id',
    foreignKey: 'playerId',
    as: 'games'
  })
  Game.belongsTo(Player, {
    foreignKey: 'playerId',
    as: 'player'
  })
}

export default defineAssociations
