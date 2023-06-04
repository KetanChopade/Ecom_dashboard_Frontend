// --
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from 'react-router-dom'
// --




function Navbarr() {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate()
  const logout = ()=> {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
    <div>
    {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-white">
          <Container fluid>
            <Navbar.Brand href="#">Kites's Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className="justify-content-center flex-grow-1 pe-3">
                {auth ? <> <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="shop">Products</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                  <Nav.Link href="profile">Profile</Nav.Link>
                 <Nav.Link onClick={logout} href="logout">Logout</Nav.Link> </>
                :
                <> <Nav.Link href="register">Register</Nav.Link> <Nav.Link href="login">Login</Nav.Link></> 
              }
                </Nav>
               
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
    </>
  )
}

export default Navbarr