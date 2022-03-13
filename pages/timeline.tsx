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
import { fetchDeveloperTimeline } from '../src/api';
import { TimelineItem as TimelineItm } from '../src/api/types';

interface StaticPropsProps {
  timelineItems: TimelineItm[];
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchDeveloperTimeline();

  return {
    props: {
      timelineItems: data.data,
    },
  }
}

export default function TimelineApp(props: StaticPropsProps) {
  const title = `Developer timeline | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Developer timeline
        </Typography>

        <Timeline position="alternate">
          { props.timelineItems.map((item, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {item.year}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                  {item.desc.map((descItem, j) => (
                    <Typography key={j}>
                      <span dangerouslySetInnerHTML={{ __html: descItem.replace(
                        /\*\*(\S(.*?\S)?)\*\*/gm,
                        '<i>$1</i>'
                      ) }}></span>
                    </Typography>
                  ))}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )) }
        </Timeline>
      </Box>
    </Container>
    </>
  );
}
