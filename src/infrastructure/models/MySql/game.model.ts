import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../../database/MySql/config.sql'
import IGame from '../../../domain/game/IGame'

export interface GameCreationAttributes extends Optional<IGame, 'id' | 'createdAt'> {}

class Game extends Model<IGame, GameCreationAttributes> implements IGame {
  public id!: number
  public dice1!: number
  public dice2!: number
  public result!: 'WIN' | 'LOST'
  public createdAt!: Date
  public playerId!: number
}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dice1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dice2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    result: {
      type: DataTypes.ENUM('WIN', 'LOST'), //BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    updatedAt: false
  }
)

// Per funcionar s'han de crear les associacions en un archiu a part
/*
Game.belongsTo(Player, {
  foreignKey: 'playerId',
  as: 'player'
})
*/
export default Game
