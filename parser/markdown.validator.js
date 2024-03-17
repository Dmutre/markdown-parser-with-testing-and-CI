const ERROR_MESSAGE = require('../utils/consts/error.message');

class MarkDownValidator {
  #markups;

  constructor(markups) {
    this.#markups = markups;
  }

  checkNesting(text, cases) {
    const parts = this.#getParts(text, cases);
    for (const part of parts) {
      cases.map(({pattern}) => {
        const matches = part.match(pattern);
        if (matches) throw new Error(ERROR_MESSAGE.NESTED);
      });
    }
  }

  #getParts(text, cases) {
    const parts = [];
    for (const {pattern} of cases) {
      const matches = text.match(pattern);
      if (matches) {
        parts.push(...matches.map(match => match.replace(pattern, '$1')));
      }
    }
    return parts;
  }

  checkUnpairedMarkup(text) {
    for (const part of this.#markups) {
      const matches = text.match(part);
      if (matches) throw new Error(ERROR_MESSAGE.UNPAIRED);
    }
  }
}

module.exports = MarkDownValidator;