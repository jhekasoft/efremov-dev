import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Head from 'next/head';
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

export default function About() {
  return (
    <>
    <Head>
      <title>Developer timeline</title>
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Developer timeline
        </Typography>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2018 – 2019 
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                <Typography variant="h6" component="h1">
                  1000.tech
                </Typography>
                <Typography>Developer, techlead (fullstack, node.js, JS (Vue.js, Nuxt.js), Go, Dart (Flutter))</Typography>
                <Typography color="textSecondary">Kyiv</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2004
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                <Typography variant="h6" component="h1">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Container>
    </>
  );
}
