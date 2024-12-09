import axios from 'axios'

export type ResCountryInfo = {
  status: string
  data: {
    name: string
    officialName: string
    region: string
    border: {
      commonName: string
      officialName: string
      countryCode: string
      region: string
      borders: any
    }[]
    population: {
      country: string
      code: string
      iso3: string
      populationCounts: {
        year: number
        value: number
      }[]
    }
    flagUrl: string
  }
}

export default function fetchCountryInfo(
  countryCode: string,
  countryName: string,
) {
  return axios<ResCountryInfo>({
    method: 'get',
    url: `${process.env.API_URL}/countries/${countryCode}/${countryName}`,
  })
}
