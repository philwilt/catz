import React from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <button className="button" disabled>{children}</button>;
  }
  return (
    <button
      className="button"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Link;
