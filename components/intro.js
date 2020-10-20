import {
  Box,
  Grid,
  Typography,
  IconButton 
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { intro } from '../resources/type'

const Intro = () => (
  <Box height="100%">
    <Grid container spacing={0}>
      <Grid item sm={12} md={6}>
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
      </Grid>
      <Grid container item sm={12} md={6} spacing={0} justify="flex-end">
        <Grid item sm={12} md={6}>
          <img width="100%" src={require('../resources/img/intro1.jpg')} alt="Joshua Tan" />
        </Grid>
      </Grid>
    </Grid>
  </Box>
)

export default Intro