import CountriesList from '@/components/CountriesList'
import fetchCountries from '@/requests/fetchCountries'
import { AccountCircle, Search } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material'
import Link from 'next/link'

export default async function Home() {
  const countries = (await fetchCountries()).data.data

  return (
    <main>
      <Container maxWidth="sm">
        <Box sx={{ mb: 2 }}>
          <h3>Select a country:</h3>
        </Box>
        {/* <Box sx={{ mb: 2 }}>
          <TextField
            label="Country"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          ></TextField>
        </Box> */}

        <CountriesList
          countries={countries.map((c) => {
            return { code: c.countryCode, name: c.name }
          })}
        />
      </Container>
    </main>
  )
}
