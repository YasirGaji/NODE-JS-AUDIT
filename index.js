let FormularsLib = ('./lib/phyformulars');

let mathLib = ('./lib/math');

const mathCalc = mathLib;


let app = {};

app.config = {
  'timeBetweenFormulars' : 1000
};


app.printAFormular = () => {

  let allFormulars = FormularsLib.allFormulars();

  let numberOfFormulars = allFormulars.length;

  let randomNumber = mathLib.getRandomNumber(1, numberOfFormulars);

  let selectedFormulars = allFormulars[randomNumber - 1];

  console.log(selectedFormulars);
};

app.indefiniteLoop = () => {
  setInterval(app.printAFormular,app.config.timeBetweenFormulars);
}

app.indefiniteLoop();