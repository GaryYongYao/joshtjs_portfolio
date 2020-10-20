import Head from 'next/head'
import {
  Box
} from '@material-ui/core'
import Intro from '../components/intro'
import { meta } from '../resources/type'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box height="100%">
      <Head>
        <title>J̶O̶'̶S̶ ̶C̶R̶E̶A̶T̶I̶V̶E̶ ̶I̶N̶T̶R̶O̶D̶U̶C̶T̶I̶O̶N̶</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:image" content={require('../resources/img/portfolio-cover.jpg')} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.desc} />
        <meta property="twitter:image" content={require('../resources/img/portfolio-cover.jpg')} />
      </Head>

      <Intro />
    </Box>
  )
}
