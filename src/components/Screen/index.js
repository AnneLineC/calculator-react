// ------------------------
// IMPORTS
// ------------------------
import PropTypes from 'prop-types';

import './styles.scss';

// ------------------------
// COMPOSANT
// ------------------------
const Screen = ({ calcul, isError }) => {
  let screenContent = calcul;
  if (isError) {
    screenContent = 'ERROR';
  }
  return (
    <div className="screen">
      <p>{screenContent}</p>
    </div>
  );
};

Screen.defaultProps = {
  calcul: '',
};

Screen.propTypes = {
  calcul: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};

// ------------------------
// EXPORT
// ------------------------
export default Screen;
