// ------------------------
// IMPORTS
// ------------------------

import PropTypes from 'prop-types';

import './styles.scss';

// ------------------------
// COMPOSANT
// ------------------------
const App = ({ value, styleAdded, keyPressed }) => {
  function handleSubmit() {
    keyPressed(value);
    console.log(`Clic sur ${value}`);
  }

  return (
    <button
      type="button"
      className={`button ${styleAdded}`}
      onClick={handleSubmit}
    >
      {value}
    </button>
  );
};

// ------------------------
// VALIDATIONS
// ------------------------

App.defaultProps = {
  styleAdded: '',
};

App.propTypes = {
  value: PropTypes.string.isRequired,
  styleAdded: PropTypes.string,
  keyPressed: PropTypes.func.isRequired,
};

// ------------------------
// EXPORT
// ------------------------
export default App;
