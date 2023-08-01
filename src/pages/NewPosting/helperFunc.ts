import { IFormData, IPostingPost } from '../../interfaces';

const normalizeFormData = (data: IFormData): IPostingPost => {
  const normalizeTextarea = (text: string): string[] =>
    text
      .slice(2)
      .split('\n- ')
      .filter((entry) => entry !== '');

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
  const dataNormalized: IPostingPost = {
    postingUrl,
    jobTitle,
    company,
    location,
    jobType,
    jobLevel,
    applicationDueDate,
    responsibilities: normalizeTextarea(responsibilities),
    qualifications: normalizeTextarea(qualifications),
    skills: skills.split(/\s*,\s*/).filter((skill) => skill !== ''),
    other,
  };
  return dataNormalized;
};

export default normalizeFormData;
