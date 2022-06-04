import { faSuitcase, faUser, faUserGraduate, IconDefinition, faAngleDown, faAngleLeft, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Chip, Collapse, Divider, IconButton, Paper, Stack, styled, Typography } from "@mui/material";
import { Container, SxProps } from "@mui/system";
import { contentSx, ResumeIcon } from "./common";
import { Experience, resumeService } from "../services/ResumeService";
import React, { useMemo, useState } from "react";
import { TransitionGroup } from "react-transition-group";

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
const certifications = resumeService.getData().certifications;
const sideProjects = resumeService.getData().sideProjects;
export function Content() {
  return (
    <Stack spacing={2}>
      <ContentCard icon={faUser} title="About Me">
        {joinContent(aboutMe)!}
      </ContentCard>

      <ExpandableCard experience={experience} icon={faSuitcase} title="Work Experience" />

      <ExpandableCard experience={sideProjects} icon={faSuitcase} title="Noteworthy side projects" />

      <ExpandableCard experience={certifications} icon={faCertificate} title="Certifications" />

      <ExpandableCard experience={education} icon={faUserGraduate} title="Education" />

    </Stack>
  );
}

interface ExpandableCardProps {
  experience: Experience[];
  title: string;
  icon: IconDefinition;
}
function ExpandableCard({ experience, icon, title }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const expandable = useMemo(() => !experience.every(e => e.showCompressed), [experience]);
  const expandIcon = useMemo(() => expandable && (
    <IconButton sx={{ marginTop: '1rem', float: 'right' }} onClick={() => setExpanded(e => !e)}>
      <ResumeIcon sx={{ marginRight: 0 }} icon={expanded ? faAngleLeft : faAngleDown} />
    </IconButton>
  ), [expanded, expandable]);

  const data = useMemo(
    () => expanded ? experience : experience.filter(e => e.showCompressed),
    [expanded, experience]
  );

  return (
    <Paper sx={contentSx} elevation={8}>
      {expandIcon}
      <CardHeading icon={icon}>{title}</CardHeading>
      <TransitionGroup>
        {data.map(collapsed(toContentDescription))}
      </TransitionGroup>
    </Paper>
  );

}
type MapCallback<T, U> = (e: T, i: number, a: T[]) => U;
function collapsed<T>(children: MapCallback<T, any>): MapCallback<T, any> {
  return (e, i, a) => (
    <Collapse key={i}>
      {children(e, i, a)}
    </Collapse>
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
  const startEnd = (startDate || endDate) && (
    <Typography variant="subtitle2" sx={{ color: 'primary.main', float: 'right' }} >
      <ResumeIcon icon={faCalendarDays} sx={iconSx} />
      {startDate} - {end}
    </Typography>
  );
  return (
    <Container sx={contentSx}>
      {startEnd}
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


function joinContent(description?: string | string[]) {
  if (description) {
    if (Array.isArray(description)) {
      return description.map((it, i) => <ContentText key={i}>{it}</ContentText>);
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
