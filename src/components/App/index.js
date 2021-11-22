// ------------------------
// IMPORTS
// ------------------------

// Modules
import { useState } from 'react';

// Composants
import Screen from '../Screen';
import Button from '../Button';

// Styles
import './styles.scss';

// ------------------------
// COMPOSANT
// ------------------------
const App = () => {
  // State
  const [calcul, setCalcul] = useState('');
  const [isError, setIsError] = useState(false);

  // Fonctions
  const calculate = () => {
    if (calcul !== '') {
      try {
        let currentCalcul = eval(calcul);
        currentCalcul = Math.round(currentCalcul * 10000) / 10000;
        setCalcul(`${currentCalcul}`);
      }
      catch (err) {
        setIsError(true);
        setCalcul('');
      }
    }
  };

  const keyPressed = (value) => {
    console.log(calcul);
    setIsError(false);

    const reg = /[0-9]/;
    if (reg.test(value) || value === '.') {
      const newcalcul = calcul + value;
      setCalcul(newcalcul);
    }
    else if (['*', '/', '-', '+', ')', '('].includes(value)) {
      const newcalcul = `${calcul} ${value} `;
      setCalcul(newcalcul);
    }
    else if (value === '=') {
      calculate();
    }
    else if (value === 'C') {
      setCalcul('');
    }
    else if (value === 'back') {
      if (calcul.slice(-1) === ' ') {
        const newcalcul = calcul.slice(0, -3);
        setCalcul(newcalcul);
      }
      else {
        const newcalcul = calcul.slice(0, -1);
        setCalcul(newcalcul);
      }
    }
    else {
      console.log('Ceci n\'est pas connu !');
      setIsError(true);
    }
  };

  // Rendu
  return (
    <div className="app">
      <Screen
        calcul={calcul}
        isError={isError}
      />
      <Button label="C" value="C" styleAdded="button--cancel button--long" keyPressed={keyPressed} />
      <Button label="&#8592;" value="back" styleAdded="button--cancel button--long" keyPressed={keyPressed} />
      <Button label="(" value="(" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label=")" value=")" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label="/" value="/" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label="x" value="*" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label="1" value="1" keyPressed={keyPressed} />
      <Button label="2" value="2" keyPressed={keyPressed} />
      <Button label="3" value="3" keyPressed={keyPressed} />
      <Button label="-" value="-" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label="4" value="4" keyPressed={keyPressed} />
      <Button label="5" value="5" keyPressed={keyPressed} />
      <Button label="6" value="6" keyPressed={keyPressed} />
      <Button label="+" value="+" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button label="7" value="7" keyPressed={keyPressed} />
      <Button label="8" value="8" keyPressed={keyPressed} />
      <Button label="9" value="9" keyPressed={keyPressed} />
      <Button label="=" value="=" styleAdded="button--high button--equal" keyPressed={keyPressed} />
      <Button label="0" value="0" keyPressed={keyPressed} styleAdded="button--long" />
      <Button label="." value="." keyPressed={keyPressed} />
    </div>
  );
};

// ------------------------
// EXPORT
// ------------------------
export default App;
