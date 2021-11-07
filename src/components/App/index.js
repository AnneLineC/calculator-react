// ------------------------
// IMPORTS
// ------------------------

// Composants
import Screen from '../Screen';
import Button from '../Button';

// Styles
import './styles.scss';

// ------------------------
// COMPOSANTS
// ------------------------
const App = () => (
  <div className="app">
    <Screen />
    <Button value="C" styleAdded="button--cancel" />
    <Button value="&#8592;" styleAdded="button--cancel" />
    <Button value="/" styleAdded="button--operator" />
    <Button value="*" styleAdded="button--operator" />
    <Button value="1" />
    <Button value="2" />
    <Button value="3" />
    <Button value="-" styleAdded="button--operator" />
    <Button value="4" />
    <Button value="5" />
    <Button value="6" />
    <Button value="+" styleAdded="button--operator" />
    <Button value="7" />
    <Button value="8" />
    <Button value="9" />
    <Button value="=" styleAdded="button--high button--equal" />
    <Button value="0" styleAdded="button--long" />
    <Button value="." />
  </div>
);

// ------------------------
// EXPORT
// ------------------------
export default App;
