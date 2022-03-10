import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Index() {
  return (
    <Container>
      <Box sx={{ my: 4, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Eugene Efremov
        </Typography>
        <Avatar
          alt="Eugene Efremov"
          src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
          sx={{ width: "20rem", height: "20rem" }}
        />
        <p><Typography>Web Developer. Kyiv, Ukraine. 🇺🇦</Typography></p>

        <p><Typography>Technologies that I prefer (technology stack):</Typography></p>
        <p>
          <Chip
            icon={<TelegramIcon />}
            label="Go"
            sx={{
              '& .MuiSvgIcon-root': {
                color: "#49ACD7"
              }
            }}
          />
        </p>
      </Box>
    </Container>
  );
}
