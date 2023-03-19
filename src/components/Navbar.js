import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUserCircle } from "react-icons/fa"
function redNavbar() {

  return (
    <div>
    <Navbar style={{backgroundColor:"#d41313"}} collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-light">Bus Tickets</Nav.Link>
            
            </Nav>
            <Nav>
          <NavDropdown title={<FaRegUserCircle style={{fontSize:30}}/>} id="collasible-nav-dropdown">
              <NavDropdown.Item>Sign In/Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default redNavbar