import { faComment, faCommentAlt, faCommentDots, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Container, Stack, SxProps, Typography } from "@mui/material";
import { resumeService } from '../services/ResumeService';
import { contentSx, ResumeIcon } from "./common";

const sx: SxProps = {
  ...contentSx,
  fontWeight: 'bolder',
  fontSize: '1.2rem',
  paddingLeft: '1.6rem'
}

const icons = [
  faCommentDots,
  faCommentAlt,
  faComment
];

const languages = resumeService.getData().languages.map(toLanguageItem);
function toLanguageItem(lang: string, index: number) {

  return (
    <Typography key={index} sx={{ fontSize: 'typography.h6' }}>
    <ResumeIcon icon={icons[ index % icons.length ]} />
    {lang}
  </Typography>
  );
}
export function Languages() {
  return (
    <Stack sx={{ margin: '0.5rem 0' }}>
      <Typography sx={sx} >
        <ResumeIcon icon={faLanguage} />
        Languages
      </Typography>

      <Container sx={{ marginTop: 1}}>
        {languages}
      </Container>
    </Stack>
  );
};
