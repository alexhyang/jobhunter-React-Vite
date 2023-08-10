const extractPoints = (text: string): string[] => {
  return text
    .replace(/\n+/g, '\n')
    .split('\n')
    .map((str) => str.replace(/^\W+/, '').trim())
    .filter((str) => str !== '');
};

const strToBulletPoints = (text: string): string => {
  return extractPoints(text)
    .map((str) => `- ${str}\n`)
    .join('');
};

export { extractPoints, strToBulletPoints };
