import { Divider, Paper, Stack, styled } from '@mui/material';
import React from 'react';
import { ContactInfo } from './ContactInfo';
import { Languages } from './Languages';
import { Profile } from './Profile';
import './SideBar.css';
import { Skills } from './Skills';


const SideBarDivider = styled(Divider)({
  marginTop: 10,
  marginBottom: 10
});

export const SideBar = () => {

  return (
    <Paper sx={{ color: 'text.secondary' }} elevation={10}>
      <Stack>
        <Profile />
        <ContactInfo />
        <SideBarDivider />
        <Languages />
        <SideBarDivider />
        <Skills />
      </Stack>
    </Paper>
  );

};



