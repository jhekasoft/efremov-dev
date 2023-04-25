import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
  const title = `Privacy Policy | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Personal data
        </Typography>

        <p>
          The extention had never collected and will never collect any personal
          data, browsing history etc.
        </p>

        <p>
          In future extention may collect browser version, platform name,
          display settings and user's filter settings (except website list or
          any other data which can help identify user). This information is
          needed for decision on implementing new features, removing unused
          features or suggesting default settings for new users. It will happen
          only with your permission.
        </p>

        <Typography variant="h5" component="h2" gutterBottom>
          Third party services
        </Typography>

        <p>
          Extension uses Chrome (Chromium) or WebExtensions Storage Sync API for
          storing user's settings and browser's Web Storage API (localStorage)
          for storing user's Developer Tools fixes.
        </p>

        <Typography variant="h5" component="h2" gutterBottom>
          The website
        </Typography>

        <p>
          For statistical purposes efremov.dev website counts the page visits
          and link clicks. A language and a time zone of a visitor are sent to
          the web server anonymously.
        </p>
      </Box>
    </Container>
    </>
  );
}
