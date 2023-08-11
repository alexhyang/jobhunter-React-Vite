const extractBulletPoints = (text: string): string[] => {
  return text
    .replace(/\n+/g, '\n')
    .split('\n')
    .map((str) => str.replace(/^\W+/, '').trim())
    .filter((str) => str !== '');
};

const formatBulletPoints = (bulletPoints: string[]): string => {
  return bulletPoints.map((str) => `- ${str}\n`).join('');
};

const strToBulletPoints = (text: string): string => {
  return formatBulletPoints(extractBulletPoints(text));
};

export { extractBulletPoints, strToBulletPoints };
