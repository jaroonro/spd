
import Button from '@mui/material/Button';
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function Home() {
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
      <div className="max-w-5xl mr-auto ml-auto bg-white h-screen flex">
        <ThemeProvider theme={theme}>
            <Stack className="self-center"spacing={3}>
                <Link href="/gridgen">
                  <Button className="font-bold w-full" variant="outlined" color="secondary">GRID-GENERATOR</Button>
                </Link>
                <Link href="/gallery">
                  <Button className="font-bold w-full" variant="outlined" color="secondary">GALLERY</Button>
                </Link>
                
                <Link href="/steamappnewsold">
                  <Button className="font-bold w-full" variant="outlined" color="secondary">STEAM-APP-NEWS (OLD)</Button>
                </Link>
                <Link href="/steamappnews">
                  <Button className="font-bold w-full" variant="outlined" color="secondary">STEAM-APP-NEWS (NOW)</Button>
                </Link>
                
            </Stack>
        </ThemeProvider>
      </div>

  )
}
