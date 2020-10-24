import {
  Box,
  Grid,
  CircularProgress,
  Typography
} from '@material-ui/core'

const Language = ({lang, val}) => {

  return (
    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" value={val} size={150} color="secondary" />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100px" textAlign="center">
            <Typography variant="body1" component="div" color="secondary">{lang}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Language