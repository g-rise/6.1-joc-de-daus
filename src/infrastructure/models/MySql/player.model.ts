import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../../database/MySql/config.sql'
import IPlayer from '../../../domain/player/IPlayer'
import Game from './game.model'

interface PlayerCreationAttributes extends Optional<IPlayer, 'id' | 'register'> {}

class Player extends Model<PlayerCreationAttributes> implements IPlayer {
  public id!: number
  public name!: string
  public register!: Date
  public games?: Game[]
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ANÒNIM'
    },
    register: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createddAt to actually be called register
    createdAt: 'register',
    // I don't want updateddAt
    updatedAt: false
  }
)

/*
Player.hasMany(Game, {
  sourceKey: 'id',
  foreignKey: 'playerId',
  as: 'games'
})
*/

export default Player
