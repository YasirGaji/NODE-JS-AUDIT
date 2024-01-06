const fs = require('fs');

export const formulars = {};

formulars.allFormulars = function() {
  const fileContents = fs.readFileSync(__dirname+'/formulars.txt', 'utf-8')

  const arrayOfFormulars = fileContents.split(/\r?\n/);

  return arrayOfFormulars;
}