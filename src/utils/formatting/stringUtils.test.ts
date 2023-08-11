import { extractBulletPoints, strToBulletPoints } from './stringUtils';

describe('test making bullet points from text', () => {
  const text1 =
    'Lead Technical Design: Propose, review, and take ownership of ' +
    'front-end technical designs, ensuring that our solutions are robust, ' +
    'scalable, and aligned with our product vision';
  const text2 =
    'UI/UX: Collaborate with the product owner and the product manager to ' +
    'design modern and user-friendly interfaces';
  const text3 =
    'Code Quality Advocate: Contribute to the establishment of ' +
    'coding standards and play a pivotal role in code reviews, driving ' +
    'excellence and consistency throughout the development process';

  describe('test extractBulletPoints()', () => {
    const expectedOutput = [text1, text2, text3];

    it('test pattern "xxxxx\\nyyyyy\\nzzzzz\\n"', () => {
      const input = `${text1}\n${text2}\n${text3}\n`;
      const result = extractBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "xxxxx\\nyyyyy\\nzzzzz\\n\\n"', () => {
      const input = `${text1}\n${text2}\n${text3}\n\n`;
      const result = extractBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "\\nxxxxx\\nyyyyy\\nzzzzz"', () => {
      const input = `\n${text1}\n${text2}\n${text3}`;
      const result = extractBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "- xxxxx\\n- yyyyy\\n- zzzzz\\n"', () => {
      const input = `- ${text1}\n- ${text2}\n- ${text3}\n`;
      const result = extractBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "- - xxxxx\\n- - yyyyy\\n- - zzzzz\\n"', () => {
      const input = `- - ${text1}\n- - ${text2}\n- - ${text3}\n`;
      const result = extractBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });
  });

  describe('test strToBulletPoints()', () => {
    const expectedOutput = `- ${text1}\n- ${text2}\n- ${text3}\n`;

    it('test pattern "xxxxx\\nyyyyy\\nzzzzz\\n"', () => {
      const input = `${text1}\n${text2}\n${text3}\n`;
      const result = strToBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "xxxxx\\nyyyyy\\nzzzzz\\n\\n"', () => {
      const input = `${text1}\n${text2}\n${text3}\n\n`;
      const result = strToBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "\\nxxxxx\\nyyyyy\\nzzzzz"', () => {
      const input = `\n${text1}\n${text2}\n${text3}`;
      const result = strToBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "- xxxxx\\n- yyyyy\\n- zzzzz\\n"', () => {
      const input = `- ${text1}\n- ${text2}\n- ${text3}\n`;
      const result = strToBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });

    it('test pattern "- - xxxxx\\n- - yyyyy\\n- - zzzzz\\n"', () => {
      const input = `- - ${text1}\n- - ${text2}\n- - ${text3}\n`;
      const result = strToBulletPoints(input);
      expect(result).toEqual(expectedOutput);
    });
  });
});
