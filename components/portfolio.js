import { useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion, useAnimation } from "framer-motion"
import PortfolioBox from './smaller/portfolioBox'

const Portfolio = ({scroll}) => {
  const sectionRef = useRef(null)
  const portfolioAnimate = useAnimation()
  
  useEffect(() => {
    const y = sectionRef.current.getBoundingClientRect().y
    if (scroll + 400 >= y ) {
      portfolioAnimate.start("visible")
    }
  }, [scroll])

  return (
    <motion.div
      initial="hidden"
      animate={portfolioAnimate}
      variants={{
        hidden: {
          transform: 'translateX(50px)',
          opacity: 0
        },
        visible: {
          transform: 'translateX(0px)',
          opacity: 1,
          transition: {
            delay: .2,
            duration: 0.9,
            ease: 'easeIn'
          }
        },
      }}
    >
      <Box
        ref={sectionRef}
        height="100%"
        className="section-top"
      >
        <Box pb={5}>
          <Grid container spacing={5}>
            <Grid item sm={10}>
              <Typography variant="h4" color="primary">Portfolio</Typography>
            </Grid>
            <Grid item sm={2} style={{ textAlign: 'right' }}>
              <Button
                style={{ marginTop: '0' }}
                onClick={() => window.open('https://www.behance.net/immacowzz')}
              >
                View All
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
              <PortfolioBox />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Portfolio