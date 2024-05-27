import express from 'express'
import cors from 'cors'
import playerRouter from './infrastructure/routes/player-routes'
import gameRouter from './infrastructure/routes/game-routes'
import dbConnection from './infrastructure/database/MySql/connection.sql'
import rankingRouter from './infrastructure/routes/ranking-routes'

const app = express()

dbConnection()

app.use(express.json()) // Soportar request quan se li passsa objecte i parsea en el request body
app.use(cors()) // Permet el funcionament d'una API des de qualsevol origen

app.get('/', (req, res) => {
  res.send('<h1>JOC DE DAUS</h1>')
})

app.use('/players', playerRouter)
app.use('/games', gameRouter)
app.use('/ranking', rankingRouter)

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  console.log(new Date())
})
