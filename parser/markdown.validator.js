const ERROR_MESSAGE = require('../utils/consts/error.message');

class MarkDownValidator {

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
    for (const { print } of cases) {
      const matches = text.match(print);
      if (matches) {
        parts.push(...matches.map(match => match.replace(print, '$1')));
      }
    }
    return parts;
  }

  validateUnpaired(text, tags) {
    const unpaired = tags.some(markup => text.match(markup));
    if (unpaired) {
      throw new Error(ERROR_MESSAGE.UNPAIRED);
    }
  }
}

module.exports = MarkDownValidator;