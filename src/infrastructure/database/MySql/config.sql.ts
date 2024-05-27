import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('joc_de_daus', 'joc', '7', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
