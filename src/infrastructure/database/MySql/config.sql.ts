import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

// const sequelize = new Sequelize('joc_de_daus', 'joc', '7', {
//   host: 'mysqlDB', // 172.24.0.2
//   dialect: 'mysql'
// })

dotenv.config()
console.log('DB_NAME:', process.env.DB_NAME)
console.log('DB_USER:', process.env.DB_USER)
console.log('DB_PASSWORD:', process.env.DB_PASSWORD)
console.log('DB_HOST:', process.env.DB_HOST)

const dbName = process.env.DB_NAME || ''
const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASSWORD || ''
const dbHost = process.env.DB_HOST || ''

if (!dbName || !dbUser || !dbPassword || !dbHost) {
  throw new Error('One or more required environment variables are missing')
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
})

export default sequelize
