import { useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ServiceBox from './smaller/serviceBox'
import { service } from '../resources/type'
import doodle from '../resources/img/josh-doodle1.png'

const Service = () => {
  const [sectionRef, inView] = useInView()
  const serviceAnimate = useAnimation()
  
  useEffect(() => {
    if (inView) {
      serviceAnimate.start("visible");
    }
  }, [serviceAnimate, inView])

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={serviceAnimate}
      variants={{
        hidden: {
          transform: 'translateX(-50px)',
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
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Box bgcolor="rgba(64, 87, 166, 0.65)">
              <Grid container className="reverse-flex" spacing={5}>
                <Grid item sm={12} md={6}>
                  <Box p={5}>
                    <Grid container className="reverse-flex" spacing={5}>
                      {service.boxes.map((b) =>  <ServiceBox key={b.title} data={b} />)}
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={6}
                  style={{
                    position: 'relative'
                  }}
                >
                  <Hidden smDown>
                    <Box
                      height="300px"
                      width="200px"
                      position="absolute"
                      right={50}
                      bottom={0}
                      p={5}
                      style={{
                        backgroundImage: `url(${doodle})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                      }}
                    />
                  </Hidden>
                  <Box p={5}>
                    <Box pb={3}>
                      <Typography variant="h4" color="secondary">Service</Typography>
                    </Box>
                    <Typography variant="body1" color="secondary">{service.desc01}</Typography>
                    <br />
                    <Typography variant="body1" color="secondary">{service.desc02}</Typography>
                    <br />
                    <Button variant="outlined" color="secondary">
                      DOWNLOAD CV
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Service