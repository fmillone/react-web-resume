import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Chip, Container, Divider, styled, SxProps, Typography } from "@mui/material";
import { ResumeIcon, contentSx } from "../common";


const ContentText = styled(Typography)({
  marginTop: 5,
  marginBottom: 15,
});

const ContentDivider = styled(Divider)({
  marginBottom: 6
});

const currentJobLabel = (<Chip label="Current" size="small" color="primary" />);
const iconSx: SxProps = { fontSize: '0.8rem', marginRight: 0.2, marginBottom: 0.1 };

interface ContentDescriptionProps {
  title: string;
  children?: JSX.Element | JSX.Element[],
  startDate: string;
  endDate?: string;
  company?: string;
  place?: string;
}
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

export function joinContent(description?: string | string[]) {
  if (description) {
    if (Array.isArray(description)) {
      return description.map((it, i) => <ContentText key={i}>{it}</ContentText>);
    } else {
      return <ContentText>{description}</ContentText>;
    }
  }
}

export function toContentDescription({ description, ...rest }: any, index: number, list: any[]) {
  return (
    <div key={index}>
      <ContentDescription {...rest} >
        {joinContent(description)}
      </ContentDescription>
      {list.length - 1 === index ? '' : <ContentDivider />}
    </div>
  );
}
