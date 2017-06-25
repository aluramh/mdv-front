import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonCustom extends Component {
  render() {
    return (
        <div>
            <Button bsStyle="primary">Primary</Button>
            <div className="btn btn-primary">This is an HTML button</div>
        </div>
      )
  }
}

export default ButtonCustom; // Don’t forget to use export default!