import phyFormular from './lib//phyformulars';

import math from './lib/math';

const mathCalc = math;


const app = {};

app.config = {
  'timeBetweenFormulars' : 1000
};


app.printAPhyFormular = () => {

  const allPhyFormulars = phyFormular.allPhyFormulars();

  const numberOfPhyFormulars = allPhyFormulars.length;

  const randomFormular = mathCalc.getRandomNumber(1, numberOfPhyFormulars);

  const selectedFormulars = allPhyFormulars[randomFormular - 1];

  console.log(selectedFormulars);
};

app.indefiniteLoop = () => {
  setInterval(app.printAPhyFormular, app.config.timeBetweenFormulars);
}

app.indefiniteLoop();