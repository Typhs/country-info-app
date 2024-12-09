import axios from 'axios'

export type ResCountries = {
  status: string
  data: {
    countryCode: string
    name: string
  }[]
}

export default function fetchCountries() {
  return axios<ResCountries>({
    method: 'get',
    url: `${process.env.API_URL}/countries`,
  })
}
