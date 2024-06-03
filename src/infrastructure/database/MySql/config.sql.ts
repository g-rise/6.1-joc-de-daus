import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('joc_de_daus', 'joc', '7', {
  host: 'mysqlDB',
  dialect: 'mysql'
})

export default sequelize
