import axios from 'axios'

export default function getCountries() {
  return axios({
    method: 'get',
    url: `${process.env.DATE_NAGER_URL}/AvailableCountries`,
  })
}
