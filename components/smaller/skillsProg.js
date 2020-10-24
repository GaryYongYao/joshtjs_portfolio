import {
  Box,
  Divider,
  LinearProgress,
  Typography
} from '@material-ui/core'

const SkillProgress = ({lang, val, last}) => {

  return (
    <Box>
      <Typography variant="body1" color="secondary">{lang}</Typography>
      <LinearProgress color="secondary" variant="determinate" value={val} />
      <Typography variant="body1" color="secondary">{val}%</Typography>
      {!last && <Divider />}
    </Box>
  )
}

export default SkillProgress