import { IFormData, IPostingPost } from '@/interfaces';

const InterfaceMapper = {
  FormDataToPostingPost: (data: IFormData): IPostingPost => {
    const stringToList = (text: string): string[] =>
      text
        .replaceAll('\n', '')
        .split('- ')
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
    const dataConverted: IPostingPost = {
      postingUrl,
      jobTitle,
      company,
      location,
      jobType,
      jobLevel,
      applicationDueDate,
      responsibilities: stringToList(responsibilities),
      qualifications: stringToList(qualifications),
      skills: skills.split(/\s*,\s*/).filter((skill) => skill !== ''),
      other,
    };
    return dataConverted;
  },
};

export default InterfaceMapper;
