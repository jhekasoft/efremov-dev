import Head from 'next/head'
import { Avatar, Chip, createStyles, Icon, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(40),
      height: theme.spacing(40),
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
      <h1>eefremov.dev</h1>
      <p>Eugene Efremov</p>
      <Avatar
        alt="Eugene Efremov"
        src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
        className={classes.avatar} />
      <p>Web Developer. Kyiv, Ukraine. 🇺🇦</p>

      <p>Technologies that I prefer (technology stack):</p>
      <p>
        <Chip
          avatar={<Icon>star</Icon>}
          label="Go" />
      </p>
    </>
  )
}

export default IndexPage
