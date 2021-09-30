import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
  return (
    <>
    <Head>
      <title>Contact</title>
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <p><EmailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Email: <Link href="mailto:jhekasoft@gmail.com">jhekasoft@gmail.com</Link>
        </p>
        <p><TelegramIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Telegram: <Link href="https://t.me/jhekasoft" target="__blank">@jhekasoft</Link>
        </p>
        <p><GitHubIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Github: <Link href="https://github.com/jhekasoft" target="__blank">@jhekasoft</Link>
        </p>
      </Box>
    </Container>
    </>
  );
}
