import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import Link from 'next/link';
interface props {
  currentpage: string; // Change the type to match the actual type of currentpage
}
function header(props:props) {
  const {currentpage} = props;
  const theme = createTheme({palette: {
    primary: {
      main: '#6CFCFA',
    },
    secondary: {
      main: '#AA15AA',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar className="justify-around">
          <Link href="/gridgen">
            <Button disabled={currentpage=="gg"} className="font-bold" variant="text" color="secondary">GRID-GENERATOR</Button>
          </Link>
          <Link href="/gallery">
            <Button disabled={currentpage=="g"} className="font-bold w-full" variant="text" color="secondary">GALLERY</Button>
          </Link>
            
          <Link href="/steamappnews">
            <Button disabled={currentpage=="san"} className="font-bold" variant="text" color="secondary">STEAM-APP-NEWS</Button>
          </Link>
        </Toolbar>
      </AppBar>
   </ThemeProvider>
  )
}

export default header