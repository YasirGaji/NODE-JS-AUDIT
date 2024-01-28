
// DEPENDENCIES
const FormularsLib = require('./lib/phyformulars/index.js');
const mathLib = require('./lib/math');

const mathCalc = mathLib;


// MODEL SCAFOLDING
const app = {};
 

// CONFIGURATION
app.config = {
  'timeBetweenFormulars' : 1000
};


// FUNCTION DECLARATION
app.printAFormular = () => {

  const allFormulars = FormularsLib.allFormulars();

  const numberOfFormulars = allFormulars.length;

  const randomNumber = mathLib.getRandomNumber(1, numberOfFormulars);

  const selectedFormulars = allFormulars[randomNumber - 1];

  console.log(selectedFormulars);
};


// FUNCTION INVOCATION
app.indefiniteLoop = () => {
  setInterval(app.printAFormular,app.config.timeBetweenFormulars);
}

app.indefiniteLoop();