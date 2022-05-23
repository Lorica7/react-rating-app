import React from 'react';
import PropTypes from 'prop-types';

function Header({text, bgColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  return (
    <header style={headerStyles}>
      <dvi className="container">
        <h1>Feedback App</h1>
        <h2>{text}</h2>
      </dvi>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;