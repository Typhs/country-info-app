import { Request, Response, Router } from 'express'
import getCountries from '../requests/getCountries'
const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const countries = (await getCountries()).data
  res.send(countries)
})

export default router
