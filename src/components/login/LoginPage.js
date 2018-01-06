// import React, { Component } from 'react';
// import { 
//     FormGroup, 
//     ControlLabel, 
//     FormControl, 
//     Button, 
//     Jumbotron, 
//     PageHeader,
//     Row, Col
// } from 'react-bootstrap';

// class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         username: '',
//         password: ''
//     };
//     this.handleChangeUsername = this.handleChangeUsername.bind(this);
//     this.handleChangePassword = this.handleChangePassword.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }     

//   handleChangeUsername(event) {
//     this.setState({username: event.target.value});
//   }

//   handleChangePassword(event) {
//     this.setState({password: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Credentials: ' + [this.state.username, this.state.password]);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="container">
//         <PageHeader>Login</PageHeader>
//         <Row>
//           <Col xs={12} md={6} mdOffset={3}>
//             <Jumbotron className="vertical-center" >
//               <form onSubmit={this.handleSubmit}>
//                 <FormGroup controlId="formBasicText">
//                   <ControlLabel>Usuario</ControlLabel>
//                   <FormControl 
//                     type="text" 
//                     placeholder="Ingresa el nombre de usuario"
//                     value={this.state.username}
//                     onChange={this.handleChangeUsername}>
//                   </FormControl>
//                 </FormGroup>
//                 <FormGroup>
//                   <ControlLabel>Contraseña</ControlLabel>
//                   <FormControl
//                     type="password" 
//                     placeholder="Ingresa la contraseña"
//                     value={this.state.password}
//                     onChange={this.handleChangePassword}>
//                   </FormControl>
//                 </FormGroup>

//                 <Button bsStyle="primary" type="submit">Ingresar</Button>
//               </form>
//             </Jumbotron>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default LoginPage; // Don’t forget to use export default!