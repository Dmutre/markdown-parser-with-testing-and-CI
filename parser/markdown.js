const { markdownCases, escapeCases } = require('../utils/cases');
const MarkDownEscapeParser = require('./markdown-to-escape.parser');
const MarkDownParser = require('./markdown.parser');
const MarkDownValidator = require('./markdown.validator');

const markDownParser = new MarkDownParser();
const markDownToEscapeParser = new MarkDownEscapeParser();
const markDownValidator = new MarkDownValidator();

class MarkDown {
  #parser;
  #validator;
  #cases;

  constructor(format) {
    if(format === 'escape') {
      this.#cases = escapeCases;
      this.#parser = markDownToEscapeParser;
    } else {
      this.#cases = markdownCases;
      this.#parser = markDownToEscapeParser;
    }
    this.#validator = markDownValidator;
  }

  parse (data) {
    const formattedText = this.#parser.removePreformatted(data);
    this.#validator.validateNesting(formattedText, this.#cases);
    const convertedMarkup = this.#parser.convert(formattedText, this.#cases);
    this.#validator.validateUnpaired(convertedMarkup);
    return this.#parser.returnPreformatted(convertedMarkup);
  }
}

module.exports = MarkDown;