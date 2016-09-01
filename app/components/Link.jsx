import React, { PureComponent } from 'react';

class Link extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
  }

  render () {
    const { active, children, onClick } = this.props;

    return (
      <button
        className="button"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        disabled={active}
      >
        {children}
      </button>
    );
  };
};

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Link;
