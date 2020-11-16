import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Head from 'next/head';

const IndexPage = () => (
  <>
    <Head>
      <title>Main</title>
    </Head>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </>
)

export default IndexPage
