import { useEffect } from 'react'
import {
  Box,
  Button,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@material-ui/lab";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { experince, education } from '../resources/type'
import doodle from '../resources/img/josh-doodle2.png'

const Experiences = () => {
  const [sectionRef, inView] = useInView()
  const expAnimate = useAnimation()
  
  useEffect(() => {
    if (inView) {
      expAnimate.start("visible");
    }
  }, [expAnimate, inView])

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={expAnimate}
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            delay: .2,
            duration: 0.7,
            ease: 'easeIn'
          }
        },
      }}
    >
      <Box
        height="100%"
        className="section-top"
      >
        <Grid container spacing={5}>
          <Grid item sm={12} md={6}>
            <Typography variant="h4" color="primary">Experiences</Typography>
            <Timeline>
              {experince.map((e, i) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    {i !== experince.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Typography variant="h6" color="primary"><b>{e.company}</b></Typography>
                      <Typography variant="caption" color="primary">{e.time}, {e.location}</Typography>
                      <Typography variant="subtitle1" color="primary">{e.title}</Typography>
                      {e.desc.map(d => <Typography key={d} variant="body2" color="primary">- {d}</Typography>)}
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            style={{
              position: 'relative'
            }}
          >
            <Typography variant="h4" color="primary">Educations</Typography>
            <Timeline>
              {education.map((e, i) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    {i !== education.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Typography variant="h6" color="primary"><b>{e.uni}</b></Typography>
                      <Typography variant="caption" color="primary">{e.time}, {e.location}</Typography>
                      <Typography variant="subtitle1" color="primary">{e.title}</Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            <Hidden smDown>
              <Box
                height="300px"
                width="300px"
                position="absolute"
                right={50}
                bottom={0}
                style={{
                  backgroundImage: `url(${doodle})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Experiences