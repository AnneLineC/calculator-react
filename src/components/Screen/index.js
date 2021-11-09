// ------------------------
// IMPORTS
// ------------------------
import PropTypes from 'prop-types';

import './styles.scss';

// ------------------------
// COMPOSANT
// ------------------------
const Screen = ({ selectedValue }) => (
  <div className="screen">
    <p>{selectedValue}</p>
  </div>
);

Screen.defaultProps = {
  selectedValue: '',
  calculResult: 0,
};

Screen.propTypes = {
  selectedValue: PropTypes.string,
};

// ------------------------
// EXPORT
// ------------------------
export default Screen;
