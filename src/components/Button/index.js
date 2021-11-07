// ------------------------
// IMPORTS
// ------------------------

import './styles.scss';

// ------------------------
// COMPONENT
// ------------------------
const App = ({ value, styleAdded }) => (
  <div className={`button ${styleAdded}`}>
    <p>{value}</p>
  </div>
);

// ------------------------
// EXPORT
// ------------------------
export default App;
