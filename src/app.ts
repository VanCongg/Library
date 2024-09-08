import express, { Request, Response, NextFunction } from 'express'
import { createServer } from 'http'
import router from './routes'
import cors from 'cors'
const app = express()

const httpServer = createServer(app)

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
app.use('/api', router)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error:', err.message)
  res.status(404).json({ error: err.message })
})
export default httpServer
