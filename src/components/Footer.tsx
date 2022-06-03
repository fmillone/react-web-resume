import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Box, Typography, Link, SxProps } from "@mui/material";
import { ResumeIcon } from "./common";


const boxSx: SxProps = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  p: 6,
  marginTop: 5
};
export const Footer = () => {
  return (
    <Box sx={boxSx} component="footer">
      <Typography variant="subtitle1" align="center">
        <Link color="inherit" href="https://github.com/fmillone/react-web-resume">
          Source Code
          <ResumeIcon sx={{ marginLeft: 1, color: 'primary.contrastText' }} icon={faGithub} />
        </Link>
      </Typography>
      <br />
      <Copyright />

    </Box>
  );
}

const Copyright = () => {
  return (
    <Typography variant="body2" color="primary.contrastText" align="center">
      {'Made by '}
      <Link color="inherit" href="https://github.com/fmillone">
        Francisco Millone
      </Link>
      <br />
      {' inspired by '}
      <Link color="inherit" href="https://www.w3schools.com/howto/tryw3css_templates_cv.htm">
        w3schools
      </Link>{'.'}
    </Typography>
  );
}
