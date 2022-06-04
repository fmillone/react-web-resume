import { faSuitcase, faUser, faUserGraduate, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Chip, Divider, Paper, Stack, styled, Typography } from "@mui/material";
import { Container, SxProps } from "@mui/system";
import { contentSx, ResumeIcon } from "./common";
import { resumeService } from "../services/ResumeService";
import React from "react";

const ContentText = styled(Typography)({
  marginTop: 5,
  marginBottom: 15,
});

const ContentDivider = styled(Divider)({
  marginBottom: 6
});

const aboutMe = resumeService.getData().aboutMe;
const experience = resumeService.getData().experience;
const education = resumeService.getData().education;
export function Content() {
  return (
    <Stack spacing={2}>
      <ContentCard icon={faUser} title="About Me">
        {joinContent(aboutMe)!}
      </ContentCard>

      <ContentCard icon={faSuitcase} title="Work Experience">
        {experience.map(toContentDescription)}
      </ContentCard>

      <ContentCard icon={faUserGraduate} title="Education">
        {education.map(toContentDescription)}
      </ContentCard>

    </Stack>
  );
}

interface ContentDescriptionProps {
  title: string;
  children?: JSX.Element | JSX.Element[],
  startDate: string;
  endDate?: string;
  company?: string;
  place?: string;
}
const currentJobLabel = (<Chip label="Current" size="small" color="primary" />);
const iconSx: SxProps = { fontSize: '0.8rem', marginRight: 0.2, marginBottom: 0.1 };
function ContentDescription({ title, children, startDate, endDate, company, place }: ContentDescriptionProps) {
  const end = endDate || currentJobLabel;
  return (
    <Container sx={contentSx}>
      <Typography variant="subtitle2" sx={{ color: 'primary.main', float: 'right' }} >
        <ResumeIcon icon={faCalendarDays} sx={iconSx} />
        {startDate} - {end}
      </Typography>
      <Typography variant="h5" >{title}</Typography>
      <Typography variant="h6" >{company}, {place}</Typography>
      {children}
    </Container>
  );
}

interface ContentCardProps {
  icon: IconDefinition;
  title: string;
  children: JSX.Element | JSX.Element[];
}

function ContentCard(props: ContentCardProps) {
  return (
    <Paper sx={contentSx} elevation={8}>
      <CardHeading icon={props.icon}>{props.title}</CardHeading>
      {props.children}
    </Paper>
  );
}

interface CardHeadingProps {
  icon: IconDefinition;
  children: JSX.Element | string,
}
function CardHeading({ icon, children }: CardHeadingProps) {
  return (
    <Typography variant='h3' color='text.secondary' sx={{ margin: '10px 8px', padding: '16px 0' }}>
      <ResumeIcon sx={{ fontSize: '2.4rem' }} icon={icon} />
      {children}
    </Typography>
  );
}


function joinContent(description?:string| string[]) {
  if(description) {
    if(Array.isArray(description)) {
      return  description.map((it, i) => <ContentText key={i}>{it}</ContentText>);
    } else {
      return <ContentText>{description}</ContentText>;
    }
  }
}

function toContentDescription({ description, ...rest }: any, index: number, list: any[]) {
  return (
    <div key={index}>
      <ContentDescription {...rest} >
        {joinContent(description)}
      </ContentDescription>
      {list.length - 1 === index ? '' : <ContentDivider />}
    </div>
  );
}
