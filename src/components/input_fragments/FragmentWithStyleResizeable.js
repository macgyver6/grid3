import React, { Component } from 'react';
import { helpers } from '../../lib/helpers';
import { entityStyle } from '../styles/formEntityStyles';
import Resizer from '../subentities/Resizer';

class FragmentWithStyleResizeable extends Component {
  render(props) {
    return (
      <div
        style={{ ...entityStyle(this.props.model.width), maxHeight: '' }}
        id={`${this.props.model.id}.${this.props.model.type}`}
        className="TextInput"
      >
        {this.props.children}
      </div>
    );
  }
}

export default FragmentWithStyleResizeable;
