'use strict';

var path = require('path');
var febs = require('febs');
var fs = require('fs/promises');
var chalk = require('chalk');
var List = require('term-list');
var utils = require('./utils');

function printSuccess() {
  console.log('**************************************************************');
  console.log('> Success`     ');
  console.log('**************************************************************');
}

function done(args, workDir) {
  workDir = workDir || process.cwd();

  let filepath = args[1];
  if (!filepath) {
    console.error(chalk.red('filepath parameter is missing!'));
    return;
  }

  if (!path.isAbsolute(filepath)) {
    filepath = path.join(workDir, filepath);
  }

  if (!febs.file.fileIsExist(filepath)) {
    console.error(chalk.red('file: \'' + filepath + '\' isnot existed!'))
    return;
  }

  console.log('');
  console.log('**************************************************************');
  console.log('> Will confuse file: ' + filepath);
  console.log('**************************************************************');
  console.log('');

  fs.writeFile(filepath, new Uint8Array(['a'.charCodeAt(0)]), {flag: 'a'}).then(res => {
    console.log('finish');  
  });
}


module.exports = {
  done: done,
};