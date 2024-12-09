import fetchCountryInfo from '@/requests/fetchCountyInfo'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import CountriesList from '../../../../components/CountriesList'
import { Home, KeyboardBackspace } from '@mui/icons-material'
import ErrorAlert from '@/components/ErrorAlert'

function itemKeyValue(key: string, value: string) {
  return (
    <Typography variant="subtitle1" component="div" color="text.secondary">
      {' '}
      <b> {key}:</b> {value}
    </Typography>
  )
}

export default async function Page({
  params,
}: {
  params: Promise<{ countryName: string; countryCode: string }>
}) {
  const pageParams = await params

  console.log(pageParams)
  try {
    const country = (
      await fetchCountryInfo(pageParams.countryCode, pageParams.countryName)
    ).data.data

    return (
      <main>
        <Card sx={{ padding: 4 }}>
          <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 1 }}>
                  <h1>{country.name}</h1>
                </Box>
                <img
                  src={country.flagUrl}
                  alt={`${country.name} country flag`}
                  loading="lazy"
                  height={25}
                />
              </Box>

              <Button size="large" variant="outlined" href="/">
                <KeyboardBackspace sx={{ mr: 1 }} />
                Return
              </Button>
            </Box>

            <Box>
              {itemKeyValue('Official name', country.officialName)}
              {itemKeyValue('Country code', pageParams.countryCode)}
              {itemKeyValue('Region', country.region)}
            </Box>

            <Box sx={{ py: 2 }}>
              <h4>Population throughout the years:</h4>
              <LineChart
                margin={{ top: 25 }}
                xAxis={[
                  {
                    data: country.population.populationCounts.map(
                      (i) => i.year,
                    ),
                  },
                ]}
                height={300}
                grid={{ vertical: true, horizontal: true }}
                series={[
                  {
                    data: country.population.populationCounts.map(
                      (i) => i.value,
                    ),
                  },
                ]}
              />
            </Box>

            <Box sx={{ py: 2 }}>
              <h4>Neighboring countries:</h4>

              <CountriesList
                countries={country.border.map((c) => {
                  return { code: c.countryCode, name: c.commonName }
                })}
              />
            </Box>
          </Stack>
        </Card>
      </main>
    )
  } catch (err) {
    return <ErrorAlert />
  }
}
