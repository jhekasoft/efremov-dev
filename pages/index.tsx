import Head from 'next/head'
import { Avatar, Chip, createStyles, makeStyles, Theme, Typography, Grid } from '@material-ui/core'
import { LanguageGo, LanguagePhp, Laravel } from 'mdi-material-ui'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    techGo: {
      color: '#49ACD7'
    },
    techPhp: {
      color: '#777BB3'
    },
    techLaravel: {
      color: '#EA4D39'
    }
  })
)

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Eugene Efremov</title>
      </Head>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <h1>Eugene Efremov</h1>
        <Avatar
          alt="Eugene Efremov"
          src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
          className={classes.avatar} />
        <p><Typography>Web Developer. Kyiv, Ukraine. 🇺🇦</Typography></p>

        <p><Typography>Technologies that I prefer (technology stack):</Typography></p>
        <p>
          <Chip
            icon={<LanguageGo />}
            label="Go"
            classes={{ icon: classes.techGo }} />
        </p>

        <p><Typography>Technologies that I used:</Typography></p>
        <p>
          <Chip
            icon={<LanguagePhp />}
            label="PHP"
            classes={{ icon: classes.techPhp }} />&nbsp;
          <Chip
            icon={<Laravel />}
            label="Laravel"
            classes={{ icon: classes.techLaravel }} />
        </p>
      </Grid>
    </>
  )
}

export default IndexPage
