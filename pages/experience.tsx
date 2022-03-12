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
import { fetchCv } from '../src/api';
import { CvEducationItem, CvExperienceItem } from '../src/api/types';

interface StaticPropsProps {
  experienceItems: CvExperienceItem[];
  educationItems: CvEducationItem[];
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchCv();

  return {
    props: {
      experienceItems: data.data.experience,
      educationItems: data.data.education,
    },
  }
}

export default function Experience(props: StaticPropsProps) {
  return (
    <>
    <Head>
      <title>Experience</title>
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Experience
        </Typography>

        <Timeline position="alternate">
          { props.experienceItems.map((item, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {item.startYear}
                  {item.startYear != item.endYear &&
                    <> – {item.endYear ? item.endYear : "present"}</>
                  }
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                  <Typography variant="h6" component="h1">
                    {item.company}
                  </Typography>
                  <Typography>{item.title}</Typography>
                  <Typography color="textSecondary">{item.location}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )) }
        </Timeline>

        <Typography variant="h5" component="h4" gutterBottom align="center">
          Education
        </Typography>

        <Timeline position="alternate">
          { props.educationItems.map((item, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {item.startYear}
                  {item.startYear != item.endYear &&
                    <> – {item.endYear ? item.endYear : "present"}</>
                  }
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                  <Typography variant="h6" component="h1">
                    {item.school}
                  </Typography>
                  <Typography>{item.degree}</Typography>
                  <Typography>{item.fieldOfStudy}</Typography>
                  <Typography color="textSecondary">{item.location}</Typography>
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
