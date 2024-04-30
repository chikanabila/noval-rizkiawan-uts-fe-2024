import {Navbar,Nav,Container,Form, NavLink, Button} from 'react-bootstrap'
import './Navigation.css'
import { Link } from 'react-router-dom';


const Navigasi = ()=>{
    return (
        <Navbar className="body">
        <Container className='container'>
          <Navbar.Brand className='mebel'>MEBEL ARTHOMORO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto lg-2"
            style={{ maxHeight: '80px' }}
            navbarScroll

          >
            <NavLink  href="/">Home</NavLink>
            <Nav.Link  className='navbar' to='Dasboard' href="Dasboard">Dasboard</Nav.Link>
            <Nav.Link className='navbar' href="Contact">Contact</Nav.Link>
            {/* <Button  space="" href="Login">Login</Button> */}
            {/* <Button  space="" href="Register">Register</Button> */}
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='oke' variant="outline-success">Search</Button>
          </Form>

            <Link className="cari" to="/Login"><h5>Login</h5></Link>
            <Link  className='cari'to='Register' href="Register"><h5>Register</h5></Link>
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
export default Navigasi;
