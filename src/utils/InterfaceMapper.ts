import { IFormData, IPostingPost } from '@/interfaces';
import { extractBulletPoints } from './formatting/stringUtils';

const InterfaceMapper = {
  FormDataToPostingPost: (data: IFormData): IPostingPost => {
    const {
      postingUrl,
      jobTitle,
      company,
      location,
      jobType,
      jobLevel,
      applicationDueDate,
      responsibilities,
      qualifications,
      skills,
      other,
    } = data;
    const dataConverted: IPostingPost = {
      postingUrl,
      jobTitle,
      company,
      location,
      jobType,
      jobLevel,
      applicationDueDate,
      responsibilities: extractBulletPoints(responsibilities),
      qualifications: extractBulletPoints(qualifications),
      skills: skills.split(/\s*,\s*/).filter((skill) => skill !== ''),
      other,
    };
    return dataConverted;
  },
};

export default InterfaceMapper;
