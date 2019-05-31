import React from 'react'
import Form from './containers/Form/Form'
import Nav from './components/UI/Nav/Nav'
import { createMuiTheme, withStyles,  } from '@material-ui/core/styles';
import {ThemeProvider  } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
          margin: '0 auto'      
      }
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <Nav />
      <Form />
    </React.Fragment>
    </ThemeProvider>
  )
}

export default App
