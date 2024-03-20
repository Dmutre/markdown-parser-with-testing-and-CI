const os = require('os');

const markups = [
  /(?<=[ ,.:;\n\t]|^)_(?=\S)/g,
  /(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
  /(?<=[ ,.:;\n\t]|^)`(?=\S)/g,
  /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)/g,
  /(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
  /(?=\S)`(?=[ ,.:;\n\t]|$)/g,
];

const preformattedSelector = /```([\s\S]*?)```/g

const osEnters = os.EOL + os.EOL;

module.exports = {
  markups,
  preformattedSelector,
  osEnters,
}

