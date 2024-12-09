import axios from 'axios'

type ResBorderCountries = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: {
    commonName: string
    officialName: string
    countryCode: string
    region: string
    borders: any
  }[]
}

type ResPopulationData = {
  error: boolean
  msg: string
  data: {
    country: string
    code: string
    iso3: string
    populationCounts: {
      year: number
      value: number
    }[]
  }
}

type ResFlagUrl = {
  error: boolean
  msg: string
  data: {
    name: string
    flag: string
    iso2: string
    iso3: string
  }
}

function fetchBorderCountries(countryCode: string) {
  return axios<ResBorderCountries>({
    method: 'get',
    url: `${process.env.DATE_NAGER_URL}/CountryInfo/${countryCode}`,
  })
}

function fetchPopulationData(countryName: string) {
  return axios<ResPopulationData>({
    method: 'post',
    url: `${process.env.COUNTRIES_NOW_URL}/population`,
    data: {
      orderBy: 'name',
      order: 'dsc',
      country: countryName,
    },
  })
}

function fetchFlagUrl(countryCode: string) {
  return axios<ResFlagUrl>({
    method: 'post',
    url: `${process.env.COUNTRIES_NOW_URL}/flag/images`,
    data: {
      iso2: countryCode,
    },
  })
}

export default async function getCountryInfo(country: string, code: string) {
  // using Promise.all here to await all request simultaneously
  const [resBorderCountries, resPopulationData, resFlagUrl] = await Promise.all(
    [
      fetchBorderCountries(code),
      fetchPopulationData(country),
      fetchFlagUrl(code),
    ],
  )

  return {
    name: resBorderCountries.data.commonName,
    officialName: resBorderCountries.data.officialName,
    region: resBorderCountries.data.region,
    border: resBorderCountries.data.borders,
    population: resPopulationData.data.data,
    flagUrl: resFlagUrl.data.data.flag,
  }
}
