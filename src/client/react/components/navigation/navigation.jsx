import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



//CHANGE WHAT MUST BE CHANGED TO HANDLE FAKE AUTHENTICATION

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthentified: localStorage.getItem('token') ? true : false
    }
    this.toggleAuthentication = this.toggleAuthentication.bind(this)
  }

  toggleAuthentication() {
    const token = localStorage.getItem('token')
    if (token){
      localStorage.removeItem('token')
      this.setState({
        isAuthentified: false
      })
    } else {
      localStorage.setItem('token', true)
      this.setState({
        isAuthentified: true
      })
    }
  }

  render() {
      return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/tasks" >Tasks</Nav.Link>
        </Nav>
        {/* ADD HERE A CHECKBOX TO TOGGLE AUTHENTICATION ON/OFF*/}
        <Form.Check 
          type="checkbox"
          label="authentified"
          checked={this.state.isAuthentified}
          onChange={this.toggleAuthentication} 
        />
      </Navbar>
    );
  }
}

export default Navigation;