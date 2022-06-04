
import data from '../data/resume-data.json';

interface Resume {
  skills: string[];
  name: string;
  aboutMe: string | string[];
  education: Experience[];
  experience: Experience[];
  languages: string[];
  contact: Contact;
}

interface Experience {
  title: string;
  startDate: string;
  endDate?: string;
  description?: string | string[];
  company?: string;
  place?: string;
}

interface Contact {
  title: string;
  city: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  websiteName?: string;
  twitter: string;
}

//TODO: convert to an actual network call?
export class ResumeService {

  getData(): Resume {
    return data;
  }
}

export const resumeService = new ResumeService();
