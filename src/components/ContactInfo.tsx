import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faGlobeAmericas, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Stack, Typography } from "@mui/material";
import { resumeService } from "../services/ResumeService";
import { contentSx, ResumeIcon } from "./common";


const contact = resumeService.getData().contact;
export function ContactInfo() {
  return (
    <Stack sx={{ marginTop: 3 }} >
      <ContactItem icon={faBriefcase} text={contact.title} />
      <ContactItem icon={faHome} text={contact.city} />
      <ContactItem icon={faEnvelope} text={contact.email} />
      <ContactItem icon={faPhone} text={contact.phone} />
      <ContactItem icon={faGithub} text={contact.github} />
      <ContactItem icon={faLinkedin} text={contact.linkedin} />
      <ContactItem icon={faGlobeAmericas} text={contact.website} />
      <ContactItem icon={faTwitter} text={contact.twitter} />
    </Stack>
  );
}

interface ContactItemProps {
  icon: IconDefinition;
  text: string;
}
const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <Typography sx={contentSx}>
      <ResumeIcon icon={icon} />
      {text}
    </Typography>
  );
};
