import Head from 'next/head'
import EmailIcon from '@material-ui/icons/Email'
import TelegramIcon from '@material-ui/icons/Telegram'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Link } from '@material-ui/core'

const IndexPage = () => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <h1>Contact</h1>
    <p><EmailIcon /> Email: <Link href="mailto:jhekasoft@gmail.com">jhekasoft@gmail.com</Link></p>
    <p><TelegramIcon /> Telegram: <Link href="https://t.me/jhekasoft" target="__blank">@jhekasoft</Link></p>
    <p><GitHubIcon /> Github: <Link href="https://github.com/jhekasoft" target="__blank">@jhekasoft</Link></p>
  </>
)

export default IndexPage
