import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faGlobeAmericas, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, Stack, Typography } from "@mui/material";
import { resumeService } from "../../services/ResumeService";
import { contentSx, ResumeIcon } from "../common";


const contact = resumeService.getData().contact;

export function ContactInfo() {
  return (
    <Stack sx={{ marginTop: 3 }} >
      <ContactItem icon={faBriefcase}>{contact.title}</ContactItem>
      <ContactItem icon={faHome}>{contact.city}</ContactItem>
      <ContactItem icon={faEnvelope}>
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </ContactItem>
      <ContactItem icon={faPhone}>
        <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
      </ContactItem>
      <ContactItem icon={faGithub}>
        <Link target="_blank"  href={`https://github.com/${contact.github}`}>{contact.github}</Link>
      </ContactItem>
      <ContactItem icon={faLinkedin}>
        <Link target="_blank" href={`https://www.linkedin.com/in/${contact.linkedin}`}>{contact.linkedin}</Link>
      </ContactItem>
      {contact.websites.map(web => (
        <ContactItem key={web.url} icon={faGlobeAmericas}>
          Web: <Link target="_blank"  href={web.url}>{web.name || web.url}</Link>
        </ContactItem>
      ))}
      <ContactItem icon={faTwitter}>
        <Link target="_blank"  href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</Link>
      </ContactItem>
    </Stack>
  );
}

interface ContactItemProps {
  icon: IconDefinition;
  children: JSX.Element | string | (JSX.Element | string)[];
}
function ContactItem({ icon, children }: ContactItemProps) {
  return (
    <Typography sx={contentSx}>
      <ResumeIcon icon={icon} />
      {children}
    </Typography>
  );
};
