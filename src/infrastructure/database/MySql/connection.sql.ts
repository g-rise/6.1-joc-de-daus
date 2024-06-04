import sequelize from './config.sql'
// import Player from '../../models/MySql/player.model'
// import Game from '../../models/MySql/game.model'
import defineAssociations from '../../models/MySql/association.models'

const dbConnection = async () => {
  try {
    const models = sequelize.modelManager.models.map(model => model.name)
    console.log('Models:', models)
    await sequelize.authenticate()
    console.log('Connexió realitzada amb la base de dades')
    defineAssociations()
    // Verificació dels models de sequelize
    // const models = sequelize.modelManager.models.map(model => model.name)
    // console.log('Models:', models)
  } catch (error) {
    console.error('No es pot connectar amb la base de dades:', error)
  }

  try {
    await sequelize.sync({ alter: true })
    console.log('Base de dades i taules creades')
  } catch (error) {
    console.error("No s'han pogut crear les taules:", error)
  }
}

export default dbConnection
