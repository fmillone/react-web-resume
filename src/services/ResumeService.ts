
import data from '../data/resume-data.json';

interface Resume {
  skills: string[];
  name: string;
  aboutMe: string | string[];
  education: Experience[];
  experience: Experience[];
  certifications: Experience[];
  sideProjects: Experience[];
  languages: string[];
  contact: Contact;
}

export interface Experience {
  title: string;
  startDate?: string;
  endDate?: string;
  description?: string | string[];
  company?: string;
  place?: string;
  showCompressed?: boolean;
}

interface Contact {
  title: string;
  city: string;
  email: string;
  emailDisplayName?: string;
  phone: string;
  github: string;
  linkedin: string;
  websites: {
    name?: string;
    url: string;
  }[]
  twitter: string;
}

//TODO: convert to an actual network call?
export class ResumeService {

  getData(): Resume {
    return data;
  }
}

export const resumeService = new ResumeService();
