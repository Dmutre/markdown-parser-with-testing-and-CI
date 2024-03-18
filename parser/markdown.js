const cases = require('../utils/cases');
const MarkDownParser = require('./markdown.parser');
const MarkDownValidator = require('./markdown.validator');

const markDownParser = new MarkDownParser();
const markDownValidator = new MarkDownValidator()

class MarkDown {
  #parser;
  #validator;
  #cases;

  constructor() {
    this.#cases = cases;
    this.#parser = markDownParser;
    this.#validator = markDownValidator;
  }

  parse (data) {
    const formattedText = this.#parser.removePreformatted(data);
    this.#validator.validateNesting(formattedText, this.#cases);
    const convertedMarkup = this.#parser.convert(formattedText, cases);
    this.#validator.validateUnpaired(convertedMarkup);
    return this.#parser.returnPreformatted(convertedMarkup);
  }

}

module.exports = MarkDown;