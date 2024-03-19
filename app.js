const fs = require('fs');
const path = require('path');
const MarkDown = require('./parser/markdown');
const { formats } = require('./utils/consts/formats');

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
const format = args.includes('--format') ? args[args.indexOf('--format') + 1] : null;

function tryCatchFunction(handle) {
  try {
    handle();
  } catch(error) {
    console.error(error.message);
    process.exit(0);
  }
}

function outPutResult(data) {
  fs.writeFileSync(getPathFromDir(outputFilePath), data, {encoding: 'utf8'})
}

function readInputFile() {
  return fs.readFileSync(getPathFromDir(inputFilePath), {encoding: 'utf8'});
}

function getPathFromDir(filePath) {
  return path.join(__dirname, filePath);
}

function validateFormat() {
  if(format && !formats.includes(format)) throw new Error('Unknow format, chose between html and escape');
}

function main() {
  validateFormat();
  const dataFromInputFile = readInputFile();
  const markDown = new MarkDown(format);
  const result = markDown.parse(dataFromInputFile);
  if(outputFilePath) outPutResult(result);
  else console.log(result);
}

tryCatchFunction(main);