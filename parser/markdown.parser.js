class MarkDownParser {
  #preformattedText;
  constructor() {
    this.#preformattedText = [];
  }

  replacePreformattedText(text) {
    const preformattedText = text.match(/```([\s\S]*?)```/g);
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
  

  convert(text, cases) {
    const converted =  cases.reduce((acc, cur) => {
      return acc.replace(cur.pattern, cur.replacement);
    }, text);
    return this.#setParagraphs(converted);
  }

  #setParagraphs(text) {
    return text.split('\n\n').reduce((acc, cur) => `${acc}\n<p>${cur}</p>`, '');
  }

  setPreformattedText(text) {
    return this.#preformattedText.reduce((acc, cur, index) => {
      const html = `<pre>${cur.replace(/```/g, '')}</pre>`;
      return acc.replace(`PRE{{${index}}}PRE`, html);
    }, text);
  }
}

module.exports = MarkDownParser;