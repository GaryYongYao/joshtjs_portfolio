import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import { sendMessage } from '../resources/type'

const SendMessage = () => {

  return (
    <Box className="section-top" pt={0}>
      <Grid container spacing={5} id="reverse">
        <Grid item sm={12} md={6}>
          <Box p={5} bgcolor="rgba(64, 87, 166, 0.65)">
            <Typography variant="h4" color="secondary">Get In Touch</Typography>
            <Box pt={4}>
              <Typography variant="h5" color="secondary">{sendMessage.desc01}</Typography>
            </Box>
            <Box pt={5} pb={3}>
              <Typography variant="body1" color="secondary">{sendMessage.desc01}</Typography>
              <br />
              <Typography variant="body1" color="secondary">{sendMessage.desc02}</Typography>
            </Box>
            <Box py={1}>
              <Typography variant="body1" color="secondary">
                <b>ADDRESS:&nbsp;</b>
                {sendMessage.address}
              </Typography>
            </Box>
            <Box py={1}>
              <Typography variant="body1" color="secondary">
                <b>EMAIL:&nbsp;</b>
                {sendMessage.email}
              </Typography>
            </Box>
            <Box py={1}>
              <Typography variant="body1" style={{ color: '#FAFAFA' }}>
                <b>PHONE:&nbsp;</b>
                {sendMessage.phone}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            p={5}
            width="100%"
            height="100%"
          >
            <Typography variant="h5">Send Me A Message</Typography>
            <Box py={2}>
              <TextField label="Name" fullWidth variant="outlined" />
              <Divider />
              <TextField label="Phone" fullWidth variant="outlined" />
              <Divider />
              <TextField label="Name" multiline rows={7} fullWidth variant="outlined" />
              <Button variant="outlined" fullWidth>
                SEND
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SendMessage