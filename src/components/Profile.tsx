import { styled, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import profilePhoto from '../images/profile_photo.jpg';
import { resumeService } from "../services/ResumeService";


const containerStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
}

const ProfileName = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  padding: '0.1em 16px',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '9vw'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.3vw'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.63rem'
  }

}));

const name = resumeService.getData().name;

export const Profile = () => {
  return (
    <div style={containerStyle}>
      <img src={profilePhoto} className="profile-photo" alt="profile" />
      <ProfileName variant='h4' >{name}</ProfileName>
    </div>
  );
};
