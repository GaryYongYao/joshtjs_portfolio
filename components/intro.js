import {
  Box,
  Grid,
  Hidden,
  Typography,
  IconButton 
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { intro } from '../resources/type'

const Intro = () => (
  <Box height="100%">
    <Grid container spacing={5}>
      <Grid item sm={12} md={6}>
        <motion.div
          initial="hidden"
          animate="visible"
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
                duration: 2
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
            <br />
            <Typography variant="body1">{intro.desc04}</Typography>
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
      <Hidden smDown>
        <Grid item sm={12} md={6} style={{ textAlign: 'right', position: 'relative' }}>
          <Hidden mdDown>
            <Box
              position="absolute"
              bottom="0"
              width="55%"
              height="155px"
              bgcolor="rgba(189, 189, 189, 0.65)"
            />
          </Hidden>
          <motion.div
            initial="hidden"
            animate="visible"
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
                  duration: 2
                }
              },
            }}
          >
            <img height="650px" src={require('../resources/img/intro1.jpg')} alt="Joshua Tan" />
          </motion.div>
        </Grid>
      </Hidden>
    </Grid>
  </Box>
)

export default Intro