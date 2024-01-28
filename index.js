
// DEPENDENCIES
let FormularsLib = ('./lib/phyformulars');
let mathLib = ('./lib/math');

const mathCalc = mathLib;


// MODEL SCAFOLDING
let app = {};
 

// CONFIGURATION
app.config = {
  'timeBetweenFormulars' : 1000
};


// FUNCTION DECLARATION
app.printAFormular = () => {

  let allFormulars = FormularsLib.allFormulars();

  let numberOfFormulars = allFormulars.length;

  let randomNumber = mathLib.getRandomNumber(1, numberOfFormulars);

  let selectedFormulars = allFormulars[randomNumber - 1];

  console.log(selectedFormulars);
};


// FUNCTION INVOCATION
app.indefiniteLoop = () => {
  setInterval(app.printAFormular,app.config.timeBetweenFormulars);
}

app.indefiniteLoop();