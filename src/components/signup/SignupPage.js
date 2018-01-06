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

// class SignupPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         username: '',
//         password: ''
//     };
//   }     

//   handleChangeUsername = (event) => {
//     this.setState({username: event.target.value});
//   }

//   handleChangePassword = (event) => {
//     this.setState({password: event.target.value});
//   }

//   handleSubmit = (event) => {
//     alert('Credentials: ' + [this.state.username, this.state.password]);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="container">
//         <PageHeader>Signup</PageHeader>
//         <Row>
//           <Col xs={12} md={6} mdOffset={3}>
//             <Jumbotron className="vertical-center" >
//               <form onSubmit={this.handleSubmit}>
//                 {/* Username */}
//                 <FormGroup controlId="formBasicText">
//                   <ControlLabel>Usuario</ControlLabel>
//                   <FormControl 
//                     type="text" 
//                     placeholder="Ingresa el nombre de usuario"
//                     value={this.state.username}
//                     onChange={this.handleChangeUsername}>
//                   </FormControl>
//                 </FormGroup>
//                 {/* Password */}
//                 <FormGroup>
//                   <ControlLabel>Contraseña</ControlLabel>
//                   <FormControl
//                     type="password" 
//                     placeholder="Ingresa la contraseña"
//                     value={this.state.password}
//                     onChange={this.handleChangePassword}>
//                   </FormControl>
//                 </FormGroup>
//                 {/* Name */}
//                 <FormGroup>
//                   <ControlLabel>Contraseña</ControlLabel>
//                   <FormControl
//                     type="password" 
//                     placeholder="Ingresa la contraseña"
//                     value={this.state.password}
//                     onChange={this.handleChangePassword}>
//                   </FormControl>
//                 </FormGroup>
//                 <Button bsStyle="primary" type="submit">Create new account</Button>
//               </form>
//             </Jumbotron>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default SignupPage;
