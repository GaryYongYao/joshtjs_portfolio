import { useEffect, useRef } from 'react'
import {
  Box,
  Grid,
  Hidden,
  Typography,
  IconButton 
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion, useAnimation } from "framer-motion"
import { intro } from '../resources/type'

const Intro = () => {
  const sectionRef = useRef(null)
  const introAnimate = useAnimation()
  
  useEffect(() => {
    introAnimate.start("visible")
  }, [])

  return (
    <motion.div
      initial="hidden"
      animate={introAnimate}
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            delay: .5,
            duration: 1.4
          }
        },
      }}
    >
      <Box ref={sectionRef} height="100%" className="section-top">
        <Grid container spacing={5}>
          <Grid item sm={12} md={6}>
            <motion.div
              initial="hidden"
              animate={introAnimate}
              variants={{
                hidden: {
                  transform: 'translateX(-50px)',
                  opacity: 0
                },
                visible: {
                  transform: 'translateX(0px)',
                  opacity: 1,
                  transition: {
                    delay: .5,
                    duration: 1.4,
                    ease: 'easeIn'
                  }
                },
              }}
            >
              <Typography variant="h5">Hi, I'm</Typography>
              <Box><Box pt={4} /></Box>
              <Typography variant="h3">Joshua Tan</Typography>
              <Typography variant="h6">Graphic Designer / Illustrator</Typography>
              <Box py={5}>
                <Typography variant="body1">{intro.desc01}</Typography>
                <br />
                <Typography variant="body1">{intro.desc02}</Typography>
                <br />
                <Typography variant="body1">{intro.desc03}</Typography>
              </Box>
              <Box>
                <IconButton
                  component="span"
                  onClick={() => window.open('https://www.behance.net/immacowzz')}
                >
                  <FontAwesomeIcon icon={faBehance} />
                </IconButton>
                <IconButton
                  component="span"
                  onClick={() => window.open('https://www.instagram.com/josh.tjs/')}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </IconButton>
                <IconButton
                  component="span"
                  onClick={() => window.open('https://www.linkedin.com/in/joshuatjs/')}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item sm={12} md={6} style={{ textAlign: 'right', position: 'relative' }}>
            <motion.div
              initial="hidden"
              animate={introAnimate}
              variants={{
                hidden: {
                  transform: 'translateX(50px)',
                  opacity: 0
                },
                visible: {
                  transform: 'translateX(0px)',
                  opacity: 1,
                  transition: {
                    delay: .5,
                    duration: 1.4,
                    ease: 'easeIn'
                  }
                },
              }}
            >
              <Hidden smDown>
                <Hidden mdDown>
                  <Box
                    zIndex={-1}
                    position="absolute"
                    bottom="-25px"
                    width="55%"
                    height="155px"
                    bgcolor="rgba(64, 87, 166, 0.65)"
                  />
                  <Box
                    zIndex={1}
                    position="absolute"
                    bottom="95px"
                    left="20px"
                    width="150px"
                  >
                    <img width="150px" src={require('../resources/img/josh-doodle3.png')} alt="Doodle" />
                  </Box>
                </Hidden>
                  <img height="650px" src={require('../resources/img/intro1.jpg')} alt="Joshua Tan" />
              </Hidden>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Intro