import { useEffect, useRef } from 'react'
import {
  Box,
  Grid,
} from '@material-ui/core'

const PortfolioBox = ({data}) => (
  <Box
    p={3}
    border="#707070 1px solid"
    mb={4}
    minHeight="300px"
    maxHeight="300px"
    minWidth="300px"
    maxWidth="300px"
    style={{
      cursor: 'pointer'
    }}
  >
    Image
  </Box>
)

export default PortfolioBox