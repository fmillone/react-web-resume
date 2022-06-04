import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Collapse, FormControlLabel, Paper, Switch, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { Experience } from "../../services/ResumeService";
import { contentSx, ResumeIcon } from "../common";
import { toContentDescription } from "./content";

interface ExpandableCardProps {
  experience: Experience[];
  title: string;
  icon: IconDefinition;
}
export function ExpandableCard({ experience, icon, title }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const expandable = useMemo(() => !experience.every(e => e.showCompressed), [experience]);
  const expandIcon = useMemo(() => expandable && (
    <FormControlLabel
      label={<Typography sx={{ fontSize: '0.3em' }}>{expanded ? 'show less' : 'show all'}</Typography>}
      labelPlacement='end'
      control={
        <Switch sx={{ marginLeft: '10px' }} color="primary" onChange={() => setExpanded(e => !e)} />
      }
    />
  ), [expanded, expandable]);

  const data = useMemo(
    () => expanded ? experience : experience.filter(e => e.showCompressed),
    [expanded, experience]
  );

  return (
    <Paper sx={contentSx} elevation={8}>
      <CardHeading icon={icon}>{title} {expandIcon}</CardHeading>
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

interface ContentCardProps {
  icon: IconDefinition;
  title: string;
  children: JSX.Element | JSX.Element[];
}

export function ContentCard(props: ContentCardProps) {
  return (
    <Paper sx={contentSx} elevation={8}>
      <CardHeading icon={props.icon}>{props.title}</CardHeading>
      {props.children}
    </Paper>
  );
}

interface CardHeadingProps {
  icon: IconDefinition;
  children: JSX.Element | string | (JSX.Element | string | false)[];
}
function CardHeading({ icon, children }: CardHeadingProps) {
  return (
    <Typography variant='h4' color='text.secondary' sx={{ margin: '10px 8px', padding: '16px 0' }}>
      <ResumeIcon sx={{ fontSize: '2.4rem' }} icon={icon} />
      {children}
    </Typography>
  );
}
