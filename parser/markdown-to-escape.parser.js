const { preformattedSelector } = require('../utils/tags')

class MarkDownEscapeParser {
  #preformattedSelector;
  #preformattedText;

  constructor() {
    this.#preformattedText = [];
    this.#preformattedSelector = preformattedSelector;
  }

  convert(text, cases) {
    let converted = text;
    for (const { print, target } of cases) {
      converted = converted.replace(new RegExp(print, 'g'), target);
    }
    return converted;
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
      const html = `\x1b[7m${cur.replace(/```/g, '')}\x1b[27m`;
      return acc.replace(`PRE{{${index}}}PRE`, html);
    }, text);
  }
}

module.exports = MarkDownEscapeParser;