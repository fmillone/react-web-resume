import { faCertificate, faSuitcase, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@mui/material";
import React from "react";
import { resumeService } from "../../services/ResumeService";
import { ContentCard, ExpandableCard } from "./cards";
import { joinContent } from "./content";


const aboutMe = resumeService.getData().aboutMe;
const experience = resumeService.getData().experience;
const education = resumeService.getData().education;
const certifications = resumeService.getData().certifications;
const sideProjects = resumeService.getData().sideProjects;
export function MainColumn() {
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
