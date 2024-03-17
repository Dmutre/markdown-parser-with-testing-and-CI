const cases = require('../utils/cases');
const markups = require('../utils/markups');
const MarkDownParser = require('./markdown.parser');
const MarkDownValidator = require('./markdown.validator');

const markDownParser = new MarkDownParser();
const markDownValidator = new MarkDownValidator(markups)

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
    const formattedText = this.#parser.replacePreformattedText(data);
    this.#validator.checkNesting(formattedText, this.#cases);
    const convertedMarkup = this.#parser.convert(formattedText, cases);
    this.#validator.checkUnpairedMarkup(convertedMarkup);
    return this.#parser.setPreformattedText(convertedMarkup);
  }

}

module.exports = MarkDown;