import { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core'
import { useInView } from "react-intersection-observer"
import Language from './smaller/languages'
import SkillProgress from './smaller/skillsProg'
import { skills } from '../resources/type'

const Skills = () => {
  const [sectionRef, inView] = useInView()
  const [langVal, setLangVal] = useState([0, 0, 0, 0])
  const [skill1Val, setSkill1Val] = useState([0, 0, 0, 0, 0])
  const [skill2Val, setSkill2Val] = useState([0, 0, 0, 0])
  
  useEffect(() => {
    if (inView) {
      setLangVal([100, 75, 75, 75])
      setSkill1Val([80, 90, 60, 50, 100])
      setSkill2Val([80, 90, 60, 50])
    }
  }, [inView])

  return (
    <div ref={sectionRef}>
      <Box
        height="100%"
        className="section-top"
      >
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Box bgcolor="rgba(64, 87, 166, 0.65)">
              <Grid container spacing={5}>
                <Grid item sm={12}>
                  <Box p={5}>
                    <Typography variant="h4" color="secondary">Skills & Languages</Typography>
                  </Box>
                </Grid>
                <Grid item sm={12}>
                  <Box p={2}>
                    <Grid container spacing={5}>
                      {skills.language.map((l, i) => <Language lang={l} val={langVal[i]} />)}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={2}>
                    {skills.skills1.map((s, i) => (
                      <SkillProgress
                        lang={s}
                        val={skill1Val[i]}
                        last={i === skill1Val.length - 1}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={2}>
                    {skills.skills2.map((s, i) => (
                      <SkillProgress
                        lang={s}
                        val={skill2Val[i]}
                        last={i === skill2Val.length - 1}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Skills