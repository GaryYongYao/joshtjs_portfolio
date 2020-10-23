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
import ServiceBox from './smaller/serviceBox'
import { service } from '../resources/type'

const Service = ({scroll}) => {
  const sectionRef = useRef(null)
  const serviceAnimate = useAnimation()
  
  useEffect(() => {
    const y = sectionRef.current.getBoundingClientRect().y
    if (scroll + 700 >= y ) {
      serviceAnimate.start("visible")
    }
  }, [scroll])

  return (
    <motion.div
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
        ref={sectionRef}
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
                      {service.boxes.map((b) =>  <ServiceBox data={b} />)}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6} >
                  <Box p={5}>
                    <Box pb={3}>
                      <Typography variant="h4" color="secondary">Service</Typography>
                    </Box>
                    <Typography variant="body1" color="secondary">{service.desc01}</Typography>
                    <br />
                    <Typography variant="body1" color="secondary">{service.desc01}</Typography>
                    <br />
                    <Typography variant="body1" color="secondary">{service.desc01}</Typography>
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