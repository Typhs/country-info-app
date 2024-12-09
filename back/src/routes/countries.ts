import { Request, Response, Router } from 'express'
import getCountries from '../requests/getCountries'
import getCountryInfo from '../requests/getCountryInfo'
const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const countries = (await getCountries()).data
  res.send(countries)
})

router.get(
  '/:countryCode/:countryName',
  async (req: Request, res: Response) => {
    try {
      const info = await getCountryInfo(
        req.params.countryName,
        req.params.countryCode,
      )
      res.send(info)
    } catch (err) {
      res.status(500)
      res.send({})
    }
  },
)

export default router
