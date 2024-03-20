const { describe, expect, test } = require('@jest/globals');
const MarkDownEscapeParser = require('./markdown-to-escape.parser');
const { escapeCases } = require('../utils/cases');

describe('Testing escape parser', () => {
  const markdown = new MarkDownEscapeParser();

  test('Test removing preformatted', () => {
    const text = '```lalala```';

    expect(markdown.removePreformatted(text)).toEqual("PRE{{0}}PRE")
  });

  test('Test converting', () => {
    const text = 'PRE{{0}}PRE\n**lala** _i am happy_ because i have this fell';

    expect(markdown.convert(text, escapeCases)).toEqual('PRE{{0}}PRE\n[1mlala[22m [3mi am happy[23m because i have this fell')
  });

  test('Return preformatted', () => {
    const text = '```lalala``` \n**lala** _i am happy_ because i have this fell';

    const removed = markdown.removePreformatted(text);
    const converted = markdown.convert(removed, escapeCases);

    expect(markdown.returnPreformatted(converted)).toEqual(`[7mlalala[27m \n[1mlala[22m [3mi am happy[23m because i have this fell`);
  });})