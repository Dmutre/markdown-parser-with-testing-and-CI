const fs = require('fs');
const path = require('path');
const MarkDown = require('./parser/markdown');

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;

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

function main() {
  const dataFromInputFile = readInputFile();
  const markDown = new MarkDown();
  const result = markDown.parse(dataFromInputFile);
  if(outputFilePath) outPutResult(result);
  else console.log(result);
}

tryCatchFunction(main);