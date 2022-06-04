import React, { useEffect } from 'react';
import { Container, Grid, ThemeProvider } from '@mui/material';

import { theme } from './theme';
import { Footer } from './components/Footer';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { resumeService } from './services/ResumeService';

const name = resumeService.getData().name;
export default function App() {
  useEffect(()=> {
    document.title = `${name}'s Resume`;
  }, []);
  return (
    <ThemeProvider theme={theme} >
      <Container sx={{bgcolor: '#f1f1f1'}} >
        <Container sx={{padding: '8px!important'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} >
              <SideBar />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Content/>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
