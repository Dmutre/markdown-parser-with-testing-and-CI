module.exports = cases = [
  {
    pattern: /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)(.+?)(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
    replacement: '<b>$1</b>',
  },
  {
    pattern: /(?<=[ ,.:;\n\t]|^)_(?=\S)(.+?)(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
    replacement: '<i>$1</i>',
  },
  {
    pattern: /(?<=[ ,.:;\n\t]|^)`(?=\S)(.+?)(?=\S)`(?=[ ,.:;\n\t]|$)/g,
    replacement: '<tt>$1</tt>',
  },
]