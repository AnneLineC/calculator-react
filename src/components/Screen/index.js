// ------------------------
// IMPORTS
// ------------------------
import PropTypes from 'prop-types';

import './styles.scss';

// ------------------------
// COMPOSANT
// ------------------------
const Screen = ({ selectedValue, calculResult }) => (
  <div className="screen">
    <p>{selectedValue}{calculResult}</p>
  </div>
);

Screen.defaultProps = {
  selectedValue: '',
  calculResult: 0,
};

Screen.propTypes = {
  selectedValue: PropTypes.string,
  calculResult: PropTypes.string,
};

// ------------------------
// EXPORT
// ------------------------
export default Screen;
