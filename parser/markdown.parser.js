const { preformattedSelector, osEnters } = require('../utils/markups')

class MarkDownParser {
  #preformattedSelector;
  #preformattedText;
  #separator;

  constructor() {
    this.#preformattedText = [];
    this.#separator = osEnters;
    this.#preformattedSelector = preformattedSelector;
  }

  convert(text, cases) {
    let converted = text;
    for (const { mark, target } of cases) {
      converted = converted.replace(new RegExp(mark, 'g'), target);
    }
    return this.#wrapParagraphs(converted);
  }

  removePreformatted(text) {
    const preformattedText = text.match(this.#preformattedSelector);
    if (preformattedText) {
      this.#preformattedText.push(...preformattedText);
      return preformattedText.reduce(
        (acc, cur, index) => acc.replace(cur, `PRE{{${index}}}PRE`),
        text
      );
    } else {
      return text;
    }
  }

  returnPreformatted(text) {
    return this.#preformattedText.reduce((acc, cur, index) => {
      const html = `<pre>${cur.replace(/```/g, '')}</pre>`;
      return acc.replace(`PRE{{${index}}}PRE`, html);
    }, text);
  }

  #wrapParagraphs(text) {
    return text
      .split(this.#separator)
      .map(cur => `<p>${cur}</p>`)
      .join('\n')
      .trim();
  }
}

module.exports = MarkDownParser;