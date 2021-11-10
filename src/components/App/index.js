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
  const [selectedValue, setSelectedValue] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  // Fonctions
  const calculate = () => {
    if (selectedValue !== '') {
      let calcul = '';
      try {
        calcul = eval(selectedValue);
        calcul = Math.round(calcul * 10000) / 10000;
      }
      catch (err) {
        calcul = 'ERROR';
      }
      setSelectedValue(`${calcul}`);
      setIsCalculated(true);
    }
  };

  const keyPressed = (value) => {
    const reg = /[0-9]/;
    if (reg.test(value) || value === '.') {
      const newSelectedValue = selectedValue + value;
      setSelectedValue(newSelectedValue);
    }
    else if (['*', '/', '-', '+', ')'].includes(value)) {
      if (isCalculated === true) {
        const newSelectedValue = `${selectedValue} ${value} `;
        setSelectedValue(newSelectedValue);
      }
      else if (selectedValue !== '') {
        const newSelectedValue = `${selectedValue} ${value} `;
        setSelectedValue(newSelectedValue);
      }
    }
    else if (['('].includes(value)) {
      const newSelectedValue = `${selectedValue} ${value} `;
      setSelectedValue(newSelectedValue);
    }
    else if (value === '=') {
      calculate();
    }
    else if (value === 'C') {
      setSelectedValue('');
      setIsCalculated(false);
    }
    else if (value === 'back') {
      if (selectedValue.slice(-1) === ' ') {
        const newSelectedValue = selectedValue.slice(0, -3);
        setSelectedValue(newSelectedValue);
      }
      else {
        const newSelectedValue = selectedValue.slice(0, -1);
        setSelectedValue(newSelectedValue);
        if (newSelectedValue === '') {
          setIsCalculated(false);
        }
      }
    }
    else {
      console.log('Ceci n\'est pas connu !');
    }
  };

  // Rendu
  return (
    <div className="app">
      <Screen 
        selectedValue={selectedValue} 
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
