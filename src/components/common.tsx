import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { styled, SxProps } from "@mui/material";

const _ResumeIcon = (props: FontAwesomeIconProps) => <FontAwesomeIcon fixedWidth  {...props}/>;

export const ResumeIcon = styled(_ResumeIcon)(({theme}) => ({
    color: theme.palette.primary.main,
    marginRight: '10px',
    fontSize: '1.1rem',
}));

export const contentSx: SxProps = {
  padding: '0.01rem 1rem'
};


