import { useEffect, useRef } from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faPaintBrush, faPencilRuler, faDraftingCompass } from '@fortawesome/free-solid-svg-icons'

const ServiceBox = ({data}) => {
  const setIcon = {
    logo: faMarker,
    illustration: faPaintBrush,
    graphics: faPencilRuler,
    video: faDraftingCompass
  }

  return (
    <Grid item sm={12} md={6}>
      <Box p={3} border="#FAFAFA 1px solid">
        <Box pb={3}>
          <FontAwesomeIcon icon={setIcon[data.icon]} size="3x" color="#FAFAFA"/>
        </Box>
        <Box pb={1}>
          <Typography variant="h5" color="secondary"><b>{data.title}</b></Typography>
        </Box>
        <Typography variant="body1" color="secondary">{data.desc}</Typography>
      </Box>
    </Grid>
  )
}

export default ServiceBox