import {Navbar,Container} from "react-bootstrap";
import './Foter.css';

const Foter = () => {
    return (
        <Navbar className="test">
      <Container>
        <Navbar.Brand href="#home">MEBEL ARTHOMORO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright ALLright reserved<a href="#login" className="text-decoration-none"> 2024</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Foter;