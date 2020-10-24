import {
  Box,
  Typography
} from '@material-ui/core'
import rhoRestaurant from '../../resources/img/rho-restaurant.jpg'
import memoir from '../../resources/img/memoir.jpg'
import growingUp from '../../resources/img/growing-up.jpg'
import kamukami from '../../resources/img/kamukami.jpg'
import jynErso from '../../resources/img/jyn-erso.jpg'
import benAdventure from '../../resources/img/ben-adventure.jpg'
import dopeCans from '../../resources/img/dope-cans.jpg'
import timelessTale from '../../resources/img/timeless-tale.jpg'

const PortfolioBox = ({data}) => {
  const link = {
    rhoRestaurant,
    memoir,
    growingUp,
    kamukami,
    jynErso,
    benAdventure,
    dopeCans,
    timelessTale
  }

  return (
    <Box
      border="rgba(0, 0, 0, 0.45) 1px solid"
      mb={4}
      position="relative"
      minHeight="300px"
      maxHeight="300px"
      minWidth="300px"
      maxWidth="300px"
      overflow="hidden"
      style={{
        cursor: 'pointer'
      }}
      className='hover-show'
    >
      <img height="100%" width="100%" src={link[data.file]} alt={data.name} />
      <Box
        className="hover-show-box"
        position="absolute"
        pr={2}
        pt={2}
        bottom="0"
        left="0"
        width="100%"
        height="300px"
        bgcolor="rgba(0, 0, 0, 0.45)"
        textAlign="right"
      >
        <Typography color="secondary" variant="body1">
          {data.name}
        </Typography>
        <Box textAlign="left" pl={1.5} pt={1}>
          <Typography color="secondary" variant="body2">
            {data.desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PortfolioBox