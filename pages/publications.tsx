import Head from 'next/head'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: "33%",
  },
  media: {
    height: 0,
    paddingTop: '56%', // ~16:9
  },
})

const PublicationsPage = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Publications</title>
      </Head>
      <h1>Publications</h1>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://jhekasoft.github.io/api/public/publications/flutter-first-steps.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Flutter: first steps (Ukrainian)
            </Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="p">
              2019
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Dou.ua. Article about Flutter mobile framework.
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button color="primary">
            Open
          </Button>
        </CardActions> */}
      </Card>
    </>
  )
}

export default PublicationsPage
