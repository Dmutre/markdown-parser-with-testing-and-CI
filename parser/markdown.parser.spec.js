const { describe, expect, test } = require('@jest/globals');
const MarkdownParser = require('./markdown.parser');
const { markdownCases } = require('../utils/cases');

describe('Testing html parser', () => {
  const markdown = new MarkdownParser();

  test('Test removing preformatted', () => {
    const text = '```lalala```';

    expect(markdown.removePreformatted(text)).toEqual("PRE{{0}}PRE")
  });

  test('Test converting', () => {
    const text = '**lala** _i am happy_ because i have this fell';

    expect(markdown.convert(text, markdownCases)).toEqual('<p><b>lala</b> <i>i am happy</i> because i have this fell</p>')
  });

  test('Return preformatted', () => {
    const text = '```lalala``` \n**lala** _i am happy_ because i have this fell';

    const removed = markdown.removePreformatted(text);
    const converted = markdown.convert(removed, markdownCases);

    expect(markdown.returnPreformatted(converted)).toEqual(`<p><pre>lalala</pre> \n<b>lala</b> <i>i am happy</i> because i have this fell</p>`);
  });
})