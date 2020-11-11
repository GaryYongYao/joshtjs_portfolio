import { useEffect } from 'react'
import {
  Box,
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PortfolioBox from './smaller/portfolioBox'
import { portfolio } from '../resources/type'

const Portfolio = () => {
  const [sectionRef, inView] = useInView()
  const portfolioAnimate = useAnimation()
  
  useEffect(() => {
    if (inView) {
      portfolioAnimate.start("visible");
    }
  }, [portfolioAnimate, inView])

  return (
    <motion.div
      ref={sectionRef}
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
                onClick={() => window.open('https://drive.google.com/file/d/1IWDMa8Cy1HHd76j7ceTb1xdVHLLDAXcf/view?usp=sharing')}
              >
                See More
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
              {portfolio.map(p => <PortfolioBox data={p}/>)}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Portfolio