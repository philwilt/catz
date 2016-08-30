import { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
}

export default PureComponent;
