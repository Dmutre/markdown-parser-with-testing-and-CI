const ERROR_MESSAGE = require('../utils/consts/error.message');
const { markups } = require('../utils/markups');

class MarkDownValidator {
  #markups;

  constructor() {
    this.#markups = markups;
  }

  validateNesting(text, cases) {
    const parts = this.#extractSelected(text, cases);
    for (const part of parts) {
      const nested = cases.some(({ print }) => part.match(print));
      if (nested) {
        throw new Error(ERROR_MESSAGE.NESTED);
      }
    }
  }

  #extractSelected(text, cases) {
    const parts = [];
    for (const { mark } of cases) {
      const matches = text.match(mark);
      if (matches) {
        parts.push(...matches.map(match => match.replace(mark, '$1')));
      }
    }
    return parts;
  }

  validateUnpaired(text) {
    const unpaired = this.#markups.some(markup => text.match(markup));
    if (unpaired) {
      throw new Error(ERROR_MESSAGE.UNPAIRED);
    }
  }
}

module.exports = MarkDownValidator;