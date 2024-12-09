import express, { NextFunction, Request, Response } from 'express'
import responseFormatter from './middlewares/responseFormatter'
import dotenv from 'dotenv'
import listCountriesRouter from './routes/listCountries'
import countriesRouter from './routes/countries'
import errorHandler from './middlewares/errorHandler'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
app.use(errorHandler)

app.use(express.json())
app.use(responseFormatter)

app.get('/', async (req: Request, res: Response) => {
  res.send({})
})

app.use('/countries', countriesRouter)

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app
