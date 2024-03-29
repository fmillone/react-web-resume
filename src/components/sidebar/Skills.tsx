import { faScrewdriverWrench, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Chip, Container, Stack, SxProps, Theme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { resumeService } from "../../services/ResumeService";
import { contentSx, ResumeIcon } from "../common";

const sx: SxProps = {
  ...contentSx,
  fontWeight: 'bolder',
  fontSize: '1.2rem',
  paddingLeft: '1.6rem'
}

const skills = resumeService.getData().skills.map(toChip);

function toChip(e: string, index: number): JSX.Element {
  return (
    <Chip key={index} label={e} size="small" variant="outlined" />
  );
}

export function Skills() {
  const isLessOf320 = useMediaQuery((theme: Theme) => theme.breakpoints.down(320));

  return (
    <Stack sx={{ margin: '0.5rem 0' }}>
      <Typography sx={sx} >
        <ResumeIcon icon={faToolbox} />
        Skills and Tools
        <ResumeIcon sx={{ marginLeft: '0.5rem' }} icon={faScrewdriverWrench} />
      </Typography>

      <Container sx={{ marginTop: 1, maxHeight: isLessOf320 ?  220 : undefined , overflow: 'auto' }}>
        {skills}
      </Container>
    </Stack>
  );
}
