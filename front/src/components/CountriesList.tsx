import { Button, Stack } from '@mui/material'

export default function CountriesList(props: {
  countries: {
    name: string
    code: string
  }[]
}) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {props.countries.map((country) => (
        <Button
          key={country.code}
          color="primary"
          variant="contained"
          size="large"
          href={`/info/${country.code}/${country.name}`}
        >
          {country.name}
          <span style={{ opacity: '0.5', marginLeft: 5 }}>
            - {country.code}
          </span>
        </Button>
      ))}
    </Stack>
  )
}
