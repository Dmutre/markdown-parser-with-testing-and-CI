const markdownCases = [
  {
    print: /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)(.+?)(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
    target: '<b>$1</b>',
  },
  {
    print: /(?<=[ ,.:;\n\t]|^)_(?=\S)(.+?)(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
    target: '<i>$1</i>',
  },
  {
    print: /(?<=[ ,.:;\n\t]|^)`(?=\S)(.+?)(?=\S)`(?=[ ,.:;\n\t]|$)/g,
    target: '<tt>$1</tt>',
  },
]

const escapeCases = [
  {
    print: /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)(.+?)(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
    target: '\x1b[1m$1\x1b[22m',
  },
  {
    print: /(?<=[ ,.:;\n\t]|^)_(?=\S)(.+?)(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
    target: '\x1b[3m$1\x1b[23m',
  },
  {
    print: /(?<=[ ,.:;\n\t]|^)`(?=\S)(.+?)(?=\S)`(?=[ ,.:;\n\t]|$)/g,
    target: '\x1b[7m$1\x1b[27m',
  },
]

module.exports = {
  markdownCases,
  escapeCases
}