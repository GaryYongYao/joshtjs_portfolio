import { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Box
} from '@material-ui/core'
import Intro from '../components/intro'
import Service from '../components/service'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'
import Experiences from '../components/experience'
import SendMessage from '../components/sendMessage'
import { meta } from '../resources/type'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <Box height="100%">
      <Head>
        <title>JO'S CREATIVE INTRODUCTION</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.desc} />
        <meta name="google-site-verification" content="wYhahgwKgmrD0ULD-j0SKWx3NwhI4gVZeSpFbpgLQHQ" />
        <meta name="keywords" content="joshtjs-portfolio, joshtjs, joshua tan, jo's creative introduction, joshtjs portfolio" />

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
      <Service />
      <Portfolio />
      <Skills />
      <Experiences />
      <SendMessage />

    </Box>
  )
}
