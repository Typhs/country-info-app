import { Home } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

export default function ErrorAlert() {
  return (
    <main>
      <Box sx={{ py: 10 }}>
        <Typography align="center">
          <Typography variant="h2">ERROR</Typography>
          <Typography sx={{ mb: 4 }} variant="subtitle1">
            Couldn't load page
          </Typography>
          <Button href="/" variant="contained">
            <Home /> Home
          </Button>
        </Typography>
      </Box>
    </main>
  )
}
