import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Jumbotron, PageHeader } from 'react-bootstrap';

class LoginPage extends Component {
  render() {
    return (
        <style>
            .vertical-center {
                min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
                min-height: 100vh; /* These two lines are counted as one :-)       */

                display: flex;
                align-items: center;
            }
        </style>

        <div className="container">
            <PageHeader>Login</PageHeader>
            <Jumbotron style={{ width: '500px' }} className="vertical-center" >
                <form>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Usuario</ControlLabel>
                        <FormControl type="text" placeholder="Ingresa el nombre de usuario"/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Contraseña</ControlLabel>
                        <FormControl type="password" placeholder="Ingresa la contraseña"/>
                    </FormGroup>
                    
                    <Button bsStyle="primary">Ingresar</Button>
                </form>
            </Jumbotron>
        </div>
    );
  }
}

export default LoginPage; // Don’t forget to use export default!