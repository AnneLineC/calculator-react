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
  const [calculResult, setCalculResult] = useState('');

  // Fonctions
  const calculate = () => {
    const calcul = eval(selectedValue);
    const calculRounded = Math.round(calcul * 10000) / 10000;
    setCalculResult(`${calculRounded}`);
    setSelectedValue('');
  };

  const keyPressed = (value) => {
    setCalculResult('');

    const reg = /[0-9]/;
    if (reg.test(value) || value === '.') {
      const newSelectedValue = selectedValue + value;
      setSelectedValue(newSelectedValue);
    }
    else if (['*', '/', '-', '+'].includes(value)) {
      const newSelectedValue = `${selectedValue} ${value} `;
      setSelectedValue(newSelectedValue);
      console.log('Ceci est un opérateur');
    }
    else if (value === '=') {
      console.log('Calcul à faire !');
      calculate();
    }
    else if (value === 'C') {
      setSelectedValue('');
    }
    else {
      console.log('Ceci n\'est pas connu !');
    }
  };

  // Rendu
  return (
    <div className="app">
      <Screen selectedValue={selectedValue} calculResult={calculResult} />
      <Button value="C" styleAdded="button--cancel" keyPressed={keyPressed} />
      <Button value="&#8592;" styleAdded="button--cancel" keyPressed={keyPressed} />
      <Button value="/" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button value="*" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button value="1" keyPressed={keyPressed} />
      <Button value="2" keyPressed={keyPressed} />
      <Button value="3" keyPressed={keyPressed} />
      <Button value="-" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button value="4" keyPressed={keyPressed} />
      <Button value="5" keyPressed={keyPressed} />
      <Button value="6" keyPressed={keyPressed} />
      <Button value="+" styleAdded="button--operator" keyPressed={keyPressed} />
      <Button value="7" keyPressed={keyPressed} />
      <Button value="8" keyPressed={keyPressed} />
      <Button value="9" keyPressed={keyPressed} />
      <Button value="=" styleAdded="button--high button--equal" keyPressed={keyPressed} />
      <Button value="0" keyPressed={keyPressed} styleAdded="button--long" />
      <Button value="." keyPressed={keyPressed} />
    </div>
  );
};

// ------------------------
// EXPORT
// ------------------------
export default App;
