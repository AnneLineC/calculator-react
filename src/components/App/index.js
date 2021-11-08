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

  // Fonctions
  const keyPressed = (value) => {
    setSelectedValue(value);
  };

  // Rendu
  return (
    <div className="app">
      <Screen selectedValue={selectedValue} />
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
