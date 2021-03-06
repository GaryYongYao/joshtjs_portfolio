import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  TextField,
  Typography
} from '@material-ui/core'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { sendMessage } from '../resources/type'
import request from '../resources/request'

const SendMessage = () => {
  const [sectionRef, inView] = useInView()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')
  const [btnText, setBtnText] = useState('SEND')
  const contactAnimate = useAnimation()
  
  useEffect(() => {
    if (inView) {
      contactAnimate.start("visible");
    }
  }, [contactAnimate, inView])

  const sendSMS = () => {
    setBtnText('SENDING...')
    request('POST', '/sendSMS', {
      to: '+60162097801',
      body: `Message from ${name} - ${phone}: ${msg}`
    })
      .then(res => {
        if (res.errors) {
          setBtnText('SEND AGAIN PLEASE')
        } else {
          setBtnText('MESSAGE SENT!')
        }
      })
  }

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={contactAnimate}
      variants={{
        hidden: {
          transform: 'translateY(50px)',
          opacity: 0
        },
        visible: {
          transform: 'translateY(0px)',
          opacity: 1,
          transition: {
            delay: .2,
            duration: 0.9,
            ease: 'easeIn'
          }
        },
      }}
    >
      <Box className="section-top" pt={0}>
        <Grid container spacing={5} id="reverse">
          <Grid item sm={12} md={6}>
            <Box p={5} bgcolor="rgba(64, 87, 166, 0.65)" position="relative">
              <Typography variant="h4" color="secondary">Get In Touch</Typography>
              <Box pt={4}>
                <Typography variant="h5" color="secondary">{sendMessage.desc01}</Typography>
              </Box>
              <Box pt={5} pb={3}>
                <br />
                <Typography variant="body1" color="secondary">{sendMessage.desc02}</Typography>
                <br />
                <br />
                <Typography variant="body1" color="secondary">{sendMessage.desc03}</Typography>
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
              <Hidden  only={['xs', 'md']}>
                <img
                  width="150px"
                  src={require('../resources/img/josh-doodle4.png')}
                  alt="Doodle"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px'
                  }}
                />
              </Hidden>
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
                <TextField
                  label="Name"
                  value={name}
                  fullWidth
                  variant="outlined"
                  onChange={e => setName(e.target.value)}
                />
                <Divider />
                <TextField
                  label="Phone"
                  value={phone}
                  fullWidth
                  variant="outlined"
                  onChange={e => setPhone(e.target.value)}
                />
                <Divider />
                <TextField
                  label="Message (Max 100 Characters)"
                  value={msg}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                  onChange={e => {
                    if (e.target.value.length < 101) {
                      setMsg(e.target.value)
                    }
                  }}
                />
                <Button
                  variant="outlined"
                  disabled={(btnText === 'SENDING...')}
                  fullWidth
                  onClick={sendSMS}
                >
                  {btnText}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default SendMessage