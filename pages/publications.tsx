import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { fetchCv } from '../src/api';
import { CvPublicationItem } from '../src/api/types';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import Image from 'next/image';

interface StaticPropsProps {
  publicationItems: CvPublicationItem[];
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchCv();

  return {
    props: {
      publicationItems: data.data.publications,
    },
  }
}

export default function Publications(props: StaticPropsProps) {
  return (
    <>
    <Head>
      <title>Publications</title>
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Publications
        </Typography>

        <Grid container spacing={4}>
          { props.publicationItems.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={6}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardActionArea href={item.url} target="__blank">
                  <CardMedia title={item.title}>
                    <Image
                      src={item.imageUrl}
                      width="840"
                      height="460"
                      alt={item.title}
                    />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" color="textSecondary">
                      {item.year}
                    </Typography>
                    <Typography color="textSecondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button variant="contained" href={item.url} target="__blank">
                      Open
                    </Button>
                  </CardActions> */}
                </CardActionArea>
              </Card>
            </Grid>
          )) }
        </Grid>
      </Box>
    </Container>
    </>
  );
}
