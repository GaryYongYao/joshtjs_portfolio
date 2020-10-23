import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiListItemText: {
      primary: {
        color: '#1a1a1a',
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1
      },
    },
    MuiInputBase: {
      input: {
        color: '#707070'
      },
      inputMultiline: {
        fontSize: '0.95rem'
      }
    },
    MuiButton: {
      root: {
        color: '#707070',
        borderRadius: '50px',
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: 1.75,
        textTransform: 'inherit',
        minWidth: 85,
        'text-transform': 'uppercase',
        marginTop: '25px',
        borderWidth: '3px'
      },
      sizeSmall: {
        'text-transform': 'none'
      },
      contained: {
        boxShadow: 'none',
      },
      outlined: {
        padding: '10px 15px'
      },
      outlinedSizeSmall: {
        padding: '2.7px 9px'
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 3px 6px #0000000A',
      }
    },
    MuiTypography: {
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        color: '#707070',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        color: '#707070',
      },
      h2: {
        fontSize: '3.75rem',
        fontWeight: 100,
        lineHeight: 1,
        color: '#707070',
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 800,
        lineHeight: 1.17,
        color: '#707070',
      },
      h4: {
        fontSize: '2.125rem',
        fontWeight: 600,
        lineHeight: 1.17,
        color: '#707070',
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 300,
        lineHeight: 1.33,
        letterSpacing: '0em',
        color: '#707070',
      },
      h6: {
        fontSize: '1.05rem',
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        color: '#707070',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
        color: '#707070',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em'
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
        color: '#707070'
      },
    },
    MuiTable: {
      root: {
        borderCollapse: 'collapse',
      }
    },

    MuiDivider: {
      root: {
        margin: '20px 0'
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8
      },
      elevation2: {
        boxShadow: 'initial',
        '& [class^="Component-horizontalScrollContainer-"]': {
          overflowX: 'visible !important',
          '& > div > div': {
            overflowY: 'visible !important',
          }
        }
      },
      root: {
        backgroundColor: 'transparent'
      }
    }
  },
  palette: {
    primary: { main: '#707070', text: '#707070' },
    secondary: { main: '#FAFAFA', text: '#FAFAFA' },
    error: { main: '#0057A6', text: '#0057A6' }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Domine"," serif"',
    htmlFontSize: 14,
  },
  custom: {
  },
})

export default theme
